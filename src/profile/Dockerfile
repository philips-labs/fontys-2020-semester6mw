FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim as base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster as build
WORKDIR /src/CoffeeTalk.Microservice.Profile

COPY CoffeeTalk.Microservice.Profile/CoffeeTalk.Microservice.Profile.csproj .
RUN dotnet restore CoffeeTalk.Microservice.Profile.csproj

FROM build as publish
RUN dotnet publish CoffeeTalk.Microservice.Profile.csproj -c release -o /app

FROM base as final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT [ "dotnet", "CoffeeTalk.Microservice.Profile.dll" ]