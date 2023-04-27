import Image from "next/image";

export default function Logo(props: any) {
  const {renderDefault, title} = props;

  return (
    <div className="flex items-center space-x-2">
        <Image
            className='object-cover rounded-full'
            height={40}
            width={40}
            src="/logo.png"
            alt={'logo'}
        />
        {renderDefault && <>{renderDefault(props)}</>}
    </div>
  )
}
