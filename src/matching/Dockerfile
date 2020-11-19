FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim as base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster as build
WORKDIR /src
COPY ["CoffeeTalk.Microservice.Matching/CoffeeTalk.Microservice.Matching.csproj", "CoffeeTalk.Microservice.Matching/"]
RUN dotnet restore "CoffeeTalk.Microservice.Matching/CoffeeTalk.Microservice.Matching.csproj"
COPY . .
WORKDIR /src/CoffeeTalk.Microservice.Matching
RUN dotnet build CoffeeTalk.Microservice.Matching.csproj -c release -o /app

FROM build as publish
RUN dotnet publish CoffeeTalk.Microservice.Matching.csproj -c release -o /app

FROM base as final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT [ "dotnet", "CoffeeTalk.Microservice.Matching.dll" ]