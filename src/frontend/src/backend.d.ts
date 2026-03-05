import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Service {
    id: bigint;
    title: string;
    active: boolean;
    description: string;
    category: string;
    price?: bigint;
}
export interface Inquiry {
    id: bigint;
    name: string;
    timestamp: bigint;
    phoneNumber: string;
    serviceNeeded: string;
}
export interface ContactSubmission {
    id: bigint;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phoneNumber?: string;
}
export interface DocumentRequirement {
    id: bigint;
    name: string;
    description?: string;
    requiredFor: Array<string>;
}
export interface backendInterface {
    addDocumentRequirement(name: string, description: string | null, requiredFor: Array<string>): Promise<bigint>;
    addService(title: string, description: string, category: string, active: boolean, price: bigint | null): Promise<bigint>;
    deleteContactSubmission(id: bigint): Promise<void>;
    deleteDocumentRequirement(id: bigint): Promise<void>;
    deleteInquiry(id: bigint): Promise<void>;
    deleteService(id: bigint): Promise<void>;
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    getAllDocumentRequirements(): Promise<Array<DocumentRequirement>>;
    getAllInquiries(): Promise<Array<Inquiry>>;
    getAllServices(): Promise<Array<Service>>;
    getDocumentRequirementsForService(service: string): Promise<Array<DocumentRequirement>>;
    getInquiriesByService(serviceNeeded: string): Promise<Array<Inquiry>>;
    getInquiry(id: bigint): Promise<Inquiry | null>;
    getServicesByCategory(category: string): Promise<Array<Service>>;
    submitContactForm(name: string, email: string, message: string, phoneNumber: string | null): Promise<bigint>;
    submitInquiry(name: string, serviceNeeded: string, phoneNumber: string): Promise<bigint>;
    updateDocumentRequirement(id: bigint, name: string | null, description: string | null, requiredFor: Array<string> | null): Promise<void>;
    updateService(id: bigint, title: string | null, description: string | null, category: string | null, active: boolean | null, price: bigint | null): Promise<void>;
}
