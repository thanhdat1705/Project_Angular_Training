export interface SearchCostTypeRequest {
    limit: number;
    page: number;
    sortField: string | null;
    sortOrder: number | null;
    search: string;
}