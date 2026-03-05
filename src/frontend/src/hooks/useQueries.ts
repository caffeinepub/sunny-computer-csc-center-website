import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  ContactSubmission,
  DocumentRequirement,
  Inquiry,
  Service,
} from "../backend";
import { useActor } from "./useActor";

// Services Queries
export function useGetAllServices() {
  const { actor, isFetching } = useActor();

  return useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllServices();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetServicesByCategory(category: string) {
  const { actor, isFetching } = useActor();

  return useQuery<Service[]>({
    queryKey: ["services", "category", category],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getServicesByCategory(category);
    },
    enabled: !!actor && !isFetching && !!category,
  });
}

// Document Requirements Queries
export function useGetAllDocumentRequirements() {
  const { actor, isFetching } = useActor();

  return useQuery<DocumentRequirement[]>({
    queryKey: ["documentRequirements"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllDocumentRequirements();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetDocumentRequirementsForService(service: string) {
  const { actor, isFetching } = useActor();

  return useQuery<DocumentRequirement[]>({
    queryKey: ["documentRequirements", "service", service],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getDocumentRequirementsForService(service);
    },
    enabled: !!actor && !isFetching && !!service,
  });
}

// Inquiry Mutations
export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      serviceNeeded: string;
      phoneNumber: string;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.submitInquiry(
        data.name,
        data.serviceNeeded,
        data.phoneNumber,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
    },
  });
}

// Contact Form Mutations
export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      message: string;
      phoneNumber?: string;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.submitContactForm(
        data.name,
        data.email,
        data.message,
        data.phoneNumber || null,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contactSubmissions"] });
    },
  });
}

// Admin Queries (for future use)
export function useGetAllInquiries() {
  const { actor, isFetching } = useActor();

  return useQuery<Inquiry[]>({
    queryKey: ["inquiries"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllInquiries();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllContactSubmissions() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactSubmission[]>({
    queryKey: ["contactSubmissions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllContactSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}
