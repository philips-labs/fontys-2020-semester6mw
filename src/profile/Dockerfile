FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim as base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster as build
WORKDIR /src
COPY ["CoffeeTalk.Microservice.Profile/CoffeeTalk.Microservice.Profile.csproj", "CoffeeTalk.Microservice.Profile/"]
RUN dotnet restore "CoffeeTalk.Microservice.Profile/CoffeeTalk.Microservice.Profile.csproj"
COPY . .
WORKDIR /src/CoffeeTalk.Microservice.Profile
RUN dotnet build CoffeeTalk.Microservice.Profile.csproj -c release -o /app

FROM build as publish
RUN dotnet publish CoffeeTalk.Microservice.Profile.csproj -c release -o /app

FROM base as final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT [ "dotnet", "CoffeeTalk.Microservice.Profile.dll" ]