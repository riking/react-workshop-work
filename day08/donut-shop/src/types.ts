
export interface DonutListInfo {
    id: number;
    ref: string;
    name: string;
    photo: string;
    photo_attribution: string;
}

export interface DonutInfo extends DonutListInfo {
    calories: number;
    extras: string[];
}

export interface DonutListingResponse {
    count: number;
    results: DonutListInfo[];
}

export interface DonutDetailResponse extends DonutInfo {};
