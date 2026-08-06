var builder = DistributedApplication.CreateBuilder(args);

var apiService = builder.AddProject<Projects.Api_Connect_ApiService>("apiservice")
    .WithHttpHealthCheck("/health");

builder.AddProject<Projects.Api_Connect_Web>("webfrontend")
    .WithExternalHttpEndpoints()
    .WithHttpHealthCheck("/health")
    .WithReference(apiService)
    .WaitFor(apiService);

builder.Build().Run();
