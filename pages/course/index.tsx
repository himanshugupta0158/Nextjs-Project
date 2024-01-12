import Link from 'next/link'
import { useRouter } from 'next/router';
const course = () => {
    const router = useRouter();
    const clickHandler = () => {
        // http -> api
        router.push('./course/3');
    };

  return (
      <>
          <h1>Next Js Course : </h1>
          <ul>
              <li><Link href='course/1' replace><h2>Course 1</h2></Link></li>
              <li><Link href='course/2'><h2>Course 2</h2></Link></li>
              <li>
                  <h2>
                      <button onClick={clickHandler}>
                          Course 3
                      </button>
                  </h2>
              </li>
              <li><Link href='course/4'><h2>Course 4</h2></Link></li>
              <li><Link href='course/5'><h2>Course 5</h2></Link></li>
              <li><Link href='course/6'><h2>Course 6</h2></Link></li>
          </ul>
      </>
  )
}

export default course


