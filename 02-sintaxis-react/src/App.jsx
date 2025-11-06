import React from "react";
import "./App.css"
import { NavBar } from "./components/NavBar";
import { ExtensionCard } from "./components/ExtensionCard";
import { LoginForm } from "./components/LoginForm";


export const App = () => {
  return (
    <>
      <NavBar />

     
      <div className="containerCards">
        <ExtensionCard
          cardTitle="Youtube"
          cardImage="🔴"
          cardDescription="Es una plataforma en línea para compartir videos, propiedad de Google."
        />
        <ExtensionCard
          cardTitle="Snapchat"
          cardImage="👻"
          cardDescription="Es una aplicación de mensajería instantánea y redes sociales."
        />
        <ExtensionCard
          cardTitle="Telegram"
          cardImage="✈️"
          cardDescription="Es una aplicación de mensajería instantánea centrada en la velocidad y la seguridad."
        />
        <ExtensionCard
          cardTitle="Gmail"
          cardImage="📩"
          cardDescription="Es un servicio de correo electrónico gratuito y seguro proporcionado por Google."
        />
        <ExtensionCard
          cardTitle="WhatsApp"
          cardImage="📲"
          cardDescription="Es una aplicación de mensajería instantánea que permite enviar y recibir mensajes."
        />
        <ExtensionCard
          cardTitle="Cívica"
          cardImage="🚡"
          cardDescription="Es una aplicación para planificar rutas de transporte público"
        />
        <ExtensionCard
          cardTitle="Notas"
          cardImage="📋"
          cardDescription="Puedes anotar las ideas que te surjan en el momento, hacer bocetos de tus ideas y mucho más."
        />
        <ExtensionCard
          cardTitle="Netflix"
          cardImage="🎞️"
          cardDescription="Es un servicio de streaming de video por suscripción que ofrece películas."
        />
        <ExtensionCard
          cardTitle="Calendario"
          cardImage="📅"
          cardDescription="Es un sistema para organizar y visualizar el paso del tiempo."
        />
      </div>
      <h1>React + Bootstrap</h1>
      <LoginForm/>

    </>
  )
}