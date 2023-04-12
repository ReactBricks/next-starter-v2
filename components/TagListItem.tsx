import React from 'react'
import Link from 'next/link'

interface TagListItemProps {
  tag: string
}

const TagListItem: React.FC<TagListItemProps> = ({ tag }) => {
  return (
    <Link
      href={`/blog/tag/${tag}`}
      className="inline-block text-sm mr-2 mb-2 transform transition-all duration-200 text-gray-800 dark:text-gray-100 border border-gray-100 dark:border-gray-800 bg-gray-100 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-500 dark:hover:border-sky-500 hover:-translate-y-0.5 rounded-md py-1.5 px-2.5"
    >
      {tag}
    </Link>
  )
}

export default TagListItem
