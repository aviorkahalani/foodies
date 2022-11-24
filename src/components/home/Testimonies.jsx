import { uniqueId } from 'lodash'

export const Testimonies = () => {
  const testimonies = [
    {
      _id: uniqueId('t_'),
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: {
        name: 'John Doe',
        imageURL: new URL('../../assets/avatar1.jpg', import.meta.url).href,
      },
    },
    {
      _id: uniqueId('t_'),
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: {
        name: 'Alice Wonder',
        imageURL: new URL('../../assets/avatar3.jpg', import.meta.url).href,
      },
    },
    {
      _id: uniqueId('t_'),
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: {
        name: 'Steve Smith',
        imageURL: new URL('../../assets/avatar2.jpg', import.meta.url).href,
      },
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-5">
      {testimonies.map((testimony) => (
        <article
          key={testimony._id}
          className="flex flex-col gap-2 rounded p-3 bg-gray-100 drop-shadow-md">
          <p>{testimony.content}</p>
          <div className="flex flex-col items-start justify-start">
            <img
              className="rounded-full w-12"
              src={testimony.author.imageURL}
              alt={testimony.author.name}
            />
            <p className="text-gray-500">{testimony.author.name}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
