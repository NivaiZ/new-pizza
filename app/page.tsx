import { Container, Filters, Title } from '@/components/shared/index'
import { ProductsListGroup } from '@/components/shared/products-group-list'
import { TopBar } from '@/components/shared/top-bar'


export default function Home() {
  return <>
    <Container className='mt-10'>
      <Title className='font-extrabold' text='Все пиццы' size='lg' />
    </Container>
    <TopBar />

    <Container className='pb-14 mt-10'>
      <div className='flex gap-[90px]'>
        <div className='w-[250px]'>
          <Filters />
        </div>

        <div className='flex flex-col gap-16'>
          <ProductsListGroup
            title="Пицца"
            items={[
              {
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.avif',
                price: 550,
                items: [{ price: 500 }],
              },
              {
                id: 2,
                name: 'Чизбурег-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.avif',
                price: 550,
                items: [{ price: 500 }],
              },
              {
                id: 3,
                name: 'Чизбурег-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.avif',
                price: 550,
                items: [{ price: 500 }],
              },
              {
                id: 4,
                name: 'Чизбурег-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.avif',
                price: 550,
                items: [{ price: 500 }],
              },
              {
                id: 5,
                name: 'Чизбурег-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.avif',
                price: 550,
                items: [{ price: 500 }],
              },
              {
                id: 6,
                name: 'Чизбурег-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.avif',
                price: 550,
                items: [{ price: 500 }],
              },
            ]}
            categoryId={1}
          />
          <ProductsListGroup
            title="Завтрак"
            items={[
              {
                id: 11,
                name: 'Чизбурег-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.avif',
                price: 550,
                items: [{ price: 500 }],
              },
              {
                id: 22,
                name: 'Чизбурег-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.avif',
                price: 550,
                items: [{ price: 500 }],
              },
              {
                id: 33,
                name: 'Чизбурег-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.avif',
                price: 550,
                items: [{ price: 500 }],
              },
              {
                id: 44,
                name: 'Чизбурег-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.avif',
                price: 550,
                items: [{ price: 500 }],
              },
              {
                id: 55,
                name: 'Чизбурег-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.avif',
                price: 550,
                items: [{ price: 500 }],
              },
              {
                id: 66,
                name: 'Чизбурег-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.avif',
                price: 550,
                items: [{ price: 500 }],
              }
            ]}
            categoryId={2}
          />
        </div>
      </div>
    </Container>
  </>
}