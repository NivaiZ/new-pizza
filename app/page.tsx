import { Categories, Container, SortPopup, Title } from '@/components/shared/index'


export default function Home() {
  return <>
    <Container className='mt-10'>
      <Title className='font-extrabold' text='Все пиццы' size='lg' />
      <Categories/>
      <SortPopup/>
    </Container>
  </>
}