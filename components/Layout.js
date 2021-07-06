
import Nav from "./Nav"
import head from "next/head"
export default function Layout({
    children
}) {

  return (
<>

<head>
  <meta name="theme-color" content="rgb(0, 132, 255)" />
  <title>Nextcovid</title>
  <meta name="description" content="web app helps you to find vaccination  slots"/>
</head>
      <Nav/>
    
      {children}
      </>
  )
  
}
