// Next
import type { NextPage } from "next";

// React
import type { ReactElement } from "react";

const Home: NextPage = (): ReactElement => {
  return (
    <div className="flex items-center h-screen justify-center text-center">
      <div>
        <h1 className="font-bold text-xl lg:text-7xl">Welcome to the
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer" title="Welcome to the Next.JS" aria-label="Welcome to the Next.JS" className="ml-3 text-blue-600">
            Next.JS
          </a>
        </h1>
      </div>
    </div>
  )
}

export default Home
