import ButtonLink from "../atoms/ButtonLink";

const Nav = () => {
  return (
    <div className='navigation'>
      <ButtonLink to='/task1' text='Task 1'/>
      <ButtonLink to='/task2' text='Task 2'/>
    </div>
  )
}

export default Nav;