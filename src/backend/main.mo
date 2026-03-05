import List "mo:core/List";
import Nat "mo:core/Nat";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";

actor {
  ////////////////////////////
  // Inquiry Data (Lead Capture)
  ////////////////////////////
  public type Inquiry = {
    id : Nat;
    name : Text;
    serviceNeeded : Text;
    phoneNumber : Text;
    timestamp : Nat;
  };

  module Inquiry {
    public func compare(a : Inquiry, b : Inquiry) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  var nextInquiryId = 1;
  let inquiries = Map.empty<Nat, Inquiry>();

  ////////////////////////////
  // Contact Submission Data
  ////////////////////////////
  public type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
    phoneNumber : ?Text;
    timestamp : Nat;
  };

  module ContactSubmission {
    public func compare(a : ContactSubmission, b : ContactSubmission) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  var nextContactSubmissionId = 1;
  let contactSubmissions = Map.empty<Nat, ContactSubmission>();

  ////////////////////////////
  // Service Management
  ////////////////////////////
  public type Service = {
    id : Nat;
    title : Text;
    description : Text;
    category : Text; // Identity, Welfare, Legal, Education, Utility
    active : Bool;
    price : ?Nat;
  };

  module Service {
    public func compare(a : Service, b : Service) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  var nextServiceId = 1;
  let services = Map.empty<Nat, Service>();

  ////////////////////////////
  // Documents Checklist
  ////////////////////////////
  public type DocumentRequirement = {
    id : Nat;
    name : Text;
    description : ?Text;
    requiredFor : [Text];
  };

  module DocumentRequirement {
    public func compare(a : DocumentRequirement, b : DocumentRequirement) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  var nextDocumentId = 1;
  let documentRequirements = Map.empty<Nat, DocumentRequirement>();

  ////////////////////////////
  // Inquiry (Lead) Functions
  ////////////////////////////
  public shared ({ caller }) func submitInquiry(name : Text, serviceNeeded : Text, phoneNumber : Text) : async Nat {
    let inquiry : Inquiry = {
      id = nextInquiryId;
      name;
      serviceNeeded;
      phoneNumber;
      timestamp = 0;
    };
    inquiries.add(nextInquiryId, inquiry);
    nextInquiryId += 1;
    inquiry.id;
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.values().toArray().sort();
  };

  public query ({ caller }) func getInquiry(id : Nat) : async ?Inquiry {
    inquiries.get(id);
  };

  public query ({ caller }) func getInquiriesByService(serviceNeeded : Text) : async [Inquiry] {
    let filtered = List.empty<Inquiry>();
    inquiries.values().forEach(
      func(inquiry) {
        if (inquiry.serviceNeeded.contains(#text serviceNeeded)) {
          filtered.add(inquiry);
        };
      }
    );
    filtered.toArray();
  };

  public shared ({ caller }) func deleteInquiry(id : Nat) : async () {
    if (not inquiries.containsKey(id)) { Runtime.trap("Inquiry does not exist!") };
    inquiries.remove(id);
  };

  ///////////////////////////////
  // Contact Submission Functions
  ///////////////////////////////
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text, phoneNumber : ?Text) : async Nat {
    let contact : ContactSubmission = {
      id = nextContactSubmissionId;
      name;
      email;
      message;
      phoneNumber;
      timestamp = 0;
    };
    contactSubmissions.add(nextContactSubmissionId, contact);
    nextContactSubmissionId += 1;
    contact.id;
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.values().toArray().sort();
  };

  public shared ({ caller }) func deleteContactSubmission(id : Nat) : async () {
    if (not contactSubmissions.containsKey(id)) { Runtime.trap("Contact submission does not exist!") };
    contactSubmissions.remove(id);
  };

  ////////////////////////////
  // Services Management Functions
  ////////////////////////////
  public shared ({ caller }) func addService(title : Text, description : Text, category : Text, active : Bool, price : ?Nat) : async Nat {
    let service : Service = {
      id = nextServiceId;
      title;
      description;
      category;
      active;
      price;
    };
    services.add(nextServiceId, service);
    nextServiceId += 1;
    service.id;
  };

  public query ({ caller }) func getAllServices() : async [Service] {
    services.values().toArray().sort();
  };

  public query ({ caller }) func getServicesByCategory(category : Text) : async [Service] {
    let filtered = List.empty<Service>();
    services.values().forEach(
      func(service) {
        if (service.category.contains(#text category)) {
          filtered.add(service);
        };
      }
    );
    filtered.toArray();
  };

  public shared ({ caller }) func updateService(id : Nat, title : ?Text, description : ?Text, category : ?Text, active : ?Bool, price : ?Nat) : async () {
    switch (services.get(id)) {
      case (null) { Runtime.trap("Service does not exist!") };
      case (?existing) {
        let updatedService : Service = {
          id = existing.id;
          title = switch (title) { case (null) { existing.title }; case (?t) { t } };
          description = switch (description) { case (null) { existing.description }; case (?d) { d } };
          category = switch (category) { case (null) { existing.category }; case (?c) { c } };
          active = switch (active) { case (null) { existing.active }; case (?a) { a } };
          price;
        };
        services.add(id, updatedService);
      };
    };
  };

  public shared ({ caller }) func deleteService(id : Nat) : async () {
    if (not services.containsKey(id)) { Runtime.trap("Service does not exist!") };
    services.remove(id);
  };

  ////////////////////////////
  // Documents Checklist Functions
  ////////////////////////////
  public shared ({ caller }) func addDocumentRequirement(name : Text, description : ?Text, requiredFor : [Text]) : async Nat {
    let doc : DocumentRequirement = {
      id = nextDocumentId;
      name;
      description;
      requiredFor;
    };
    documentRequirements.add(nextDocumentId, doc);
    nextDocumentId += 1;
    doc.id;
  };

  public query ({ caller }) func getAllDocumentRequirements() : async [DocumentRequirement] {
    documentRequirements.values().toArray().sort();
  };

  public query ({ caller }) func getDocumentRequirementsForService(service : Text) : async [DocumentRequirement] {
    let filtered = List.empty<DocumentRequirement>();
    documentRequirements.values().forEach(
      func(doc) {
        let servicesIter = doc.requiredFor.values();
        if (servicesIter.any(func(s) { service.contains(#text s) })) {
          filtered.add(doc);
        };
      }
    );
    filtered.toArray();
  };

  public shared ({ caller }) func updateDocumentRequirement(id : Nat, name : ?Text, description : ?Text, requiredFor : ?[Text]) : async () {
    switch (documentRequirements.get(id)) {
      case (null) { Runtime.trap("Document requirement does not exist!") };
      case (?existing) {
        let updatedDoc : DocumentRequirement = {
          id = existing.id;
          name = switch (name) { case (null) { existing.name }; case (?n) { n } };
          description;
          requiredFor = switch (requiredFor) {
            case (null) { existing.requiredFor };
            case (?r) { r };
          };
        };
        documentRequirements.add(id, updatedDoc);
      };
    };
  };

  public shared ({ caller }) func deleteDocumentRequirement(id : Nat) : async () {
    if (not documentRequirements.containsKey(id)) { Runtime.trap("Document requirement does not exist!") };
    documentRequirements.remove(id);
  };
};
