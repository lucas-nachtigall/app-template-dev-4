exports.handler = async (event) => {
    console.log("log");
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello World!!'),
    };
    return response;
};
