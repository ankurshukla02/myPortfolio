import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ankur Shukla - Senior Software Engineer | Backend Developer",
  description:
    "Senior Software Engineer specializing in scalable REST APIs, and secure web systems. Expert in Node.js, MongoDB, AWS.",
  keywords:
    "senior software engineer, node.js developer, API development, freelance developer",
  authors: [{ name: "Ankur Shukla" }],
  openGraph: {
    title: "Ankur Shukla - Senior Software Engineer",
    description: "Senior Software Engineer specializing in scalable REST APIs",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
