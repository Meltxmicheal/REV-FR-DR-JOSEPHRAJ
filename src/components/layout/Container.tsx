import React from "react"

type ContainerProps = {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export default function Container({ children, className = "", as: Tag = "div" }: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-7xl 2xl:max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 ${className}`}>
      {children}
    </Tag>
  )
}
