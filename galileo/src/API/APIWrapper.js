let host;
if (process.env.NODE_ENV === "development") {
    host = "http://localhost:3000";
} else if (process.env.NODE_ENV === "production") {
   // Server URL here -->
}

class APIWrapper {
    send = async( method, path, data) => {
        return fetch(host + path, {
            method,
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(data),
        }).then((response)=> {
            if (!response.ok){
                var e = new Error('server error');
                throw e;
            }
            return response.json();
            });
        };
    }
    export default new APIWrapper();