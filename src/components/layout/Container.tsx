import React from "react"

type ContainerProps = {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export default function Container({ children, className = "", as: Tag = "div" }: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-16 ${className}`}>
      {children}
    </Tag>
  )
}
