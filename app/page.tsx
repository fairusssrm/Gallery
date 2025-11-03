"use client"

export default function Home() {
  const checkFullImage = (key: number)=> ((key+1) %  3) === 1 ? 4 : 2
  const images = Array.from({ length: 10 }, (_, i) => {
    return {url:`https://picsum.photos/id/${237 + i}/200/300`,
            col: checkFullImage(i)
            }
            })
  
  return (
    <div className="flex justify-center">
    <div className=" grid grid-cols-4 gap-4 w-3xs"                                          >
      {images.map((image, key)=>{
        return (
          <div className={`col-span-${image.col} bg-blue-300 h-40 overflow-hidden rounded-2xl `} key={key}>
                <img  className="object-cover w-full" src={image.url}  alt="image" />
          </div>
        )
      })}
    </div>
    </div>
  );
}


