export interface SearchProductRequest {
    limit: number;
    page: number;
    search: string;
    sortField: string | null;
    sortOrder: number | null;
    categoryIds: string[];
    units: string[];
}
