import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';

const Course_detail = () => {
    const router = useRouter();
    const slug = router.query.course_slug;

  return (
      <>
          <h2>Welcome to Course {slug}</h2>
            <Link href={`./${slug}/image/1`}>view image</Link>

      </>
  )
}

export default Course_detail