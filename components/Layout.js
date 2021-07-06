
import Nav from "./Nav"
import head from "next/head"
export default function Layout({
    children
}) {

  return (
<>

<head>
  <meta name="theme-color" content="rgb(0, 132, 255)" />
</head>
      <Nav/>
    
      {children}
      </>
  )
  
}
