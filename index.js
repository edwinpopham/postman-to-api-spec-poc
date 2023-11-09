const postmanToOpenApi = require("postman-to-openapi");

const createOpenApi = async () => {
  const postmanCollection = "./postman/collection.json";
  const outputFile = "./api_spec/collection.yml";
  return await postmanToOpenApi(postmanCollection, outputFile, {
    defaultTag: "General",
  });
};

createOpenApi();
