FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim as base

WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster as build
WORKDIR /src
COPY ["CoffeeTalk.Microservice.Profile/CoffeeTalk.Microservice.Profile.csproj", "CoffeeTalk.Microservice.Profile/"]
RUN dotnet restore "CoffeeTalk.Microservice.Profile/CoffeeTalk.Microservice.Profile.csproj"
COPY . .
WORKDIR "/src/CoffeeTalk.Microservice.Profile"
RUN dotnet build "CoffeeTalk.Microservice.Profile.csproj" -c release -o /app/build

FROM build as publish
RUN dotnet publish "CoffeeTalk.Microservice.Profile.csproj" -c release -o /app/publish

FROM base as final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT [ "dotnet", "CoffeeTalk.Microservice.Profile.dll" ]