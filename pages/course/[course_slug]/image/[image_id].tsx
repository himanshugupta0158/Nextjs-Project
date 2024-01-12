import { useRouter } from 'next/router'

const imageId = () => {
    const router = useRouter();
    const { course_slug, image_id } = router.query;
    

  return (
      <div>This is the {image_id}th Image of Course {course_slug}</div>
  )
}

export default imageId