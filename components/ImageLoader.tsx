import Image from 'next/image'
 
function ImageLoad({src, width, height}) {
  return (
    <div>
      <Image
        src={src}
        width={width}
        height={height}
        alt=""
      />
    </div>
  )
}

export default ImageLoad;