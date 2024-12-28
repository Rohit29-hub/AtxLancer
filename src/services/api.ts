import axios from 'axios';

interface ApiResponse {
    message: string;
    success: boolean;
    status: boolean;
    data?: any;
}

const apiRequest = async (
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    body: any = null
): Promise<ApiResponse> => {
    try {
        const BASE_URL = import.meta.env.VITE_BACKEND_URL + url;

        const config: Axios.AxiosXHRConfig<any> = {
            method,
            url: BASE_URL,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        // If the method is POST, PUT, include the body in the request
        if (body && (method === 'POST' || method === 'PUT')) {
            config.data = body;
        }

        // Make the request using Axios
        const response = await axios(config);

        // Return the response data
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default apiRequest;
