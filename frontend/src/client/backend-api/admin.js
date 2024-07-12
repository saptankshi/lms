const AdminApi = {
    getPendingReturns: async () => {
        const res = await fetch("/v1/admin/pending-returns", { method: "GET" });
        const data = await res.json();
        console.log('Pending returns response:', data); // Log the response
        return data;
    },
};

module.exports = { AdminApi };
