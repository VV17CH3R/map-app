import Image from "next/image";
import { MapPin } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  return (
    <main className="">
      <div className="w-[3640px] relative bg-w/20 h-[4858px]">
        <Image
          src="https://ncovgggrjiogvnverryj.supabase.co/storage/v1/object/public/content-for-sloweska/spb.jpg?t=2024-04-06T03%3A18%3A49.009Z"
          width={3640}
          height={4858}
          alt="spb-main-map"
          className="postion absolute -z-10 top-0 bottom-0"
        />
        <div className="top-[2290px] left-[1630px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Link href="/">
            <Dialog>
              <DialogTrigger><MapPin size={50} className="font-extrabold" /></DialogTrigger>
              <DialogContent  className="top-[2290px] left-[1630px] flex flex-col justify-center items-center absolute w-[300px] h-[150px] ">
                <DialogHeader>
                  <DialogTitle>Растральные Колоны</DialogTitle>
                  <DialogDescription>
                    Носы кораблей, ну ниче так
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </Link>
        </div>
        <div className="top-[2330px] left-[1550px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Link href="/">
            <Dialog>
              <DialogTrigger><MapPin size={50} className="font-extrabold" /></DialogTrigger>
              <DialogContent className="top-[2330px] left-[1550px] flex flex-col justify-center items-center absolute w-[300px] h-[150px] ">
                <DialogHeader>
                  <DialogTitle>Кунсткамера</DialogTitle>
                  <DialogDescription>
                    Там мои самурайские доспехи :3 <br/>
                    Исторический Музей Москвы круче на 700%.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </Link>
        </div>
        <div className="top-[2170px] left-[1750px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Link href="/">
            <Dialog>
              <DialogTrigger><MapPin size={50} className="font-extrabold" /></DialogTrigger>
              <DialogContent className="top-[2170px] left-[1750px] flex flex-col justify-center items-center absolute w-[300px] h-[150px]">
                <DialogHeader>
                  <DialogTitle>Заячий остров</DialogTitle>
                  <DialogDescription>
                    Ну полазь... В полдень стреляют из пушек. <br/>
                    Задача найти на нём памятник Корюшке +1000exp
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </Link>
        </div>

        <div className="top-[2100px] left-[1960px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Link href="/">
            <Dialog>
              <DialogTrigger><MapPin size={50} className="font-extrabold" /></DialogTrigger>
              <DialogContent className="top-[2100px] left-[1960px] flex flex-col justify-center items-center absolute w-[300px] h-[150px]">
                <DialogHeader>
                  <DialogTitle>Аврора...</DialogTitle>
                  <DialogDescription>
                    Кораблик... 
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </Link>
        </div>

        <div className="top-[2100px] left-[1750px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Link href="/">
            <Dialog>
              <DialogTrigger><MapPin size={50} className="font-extrabold" /></DialogTrigger>
              <DialogContent className="top-[2100px] left-[1750px] flex flex-col justify-center items-center absolute w-[300px] h-[150px]">
                <DialogHeader>
                  <DialogTitle>НедоЗоопарк...</DialogTitle>
                  <DialogDescription>
                    Московский круче на 350% <br/>
                    {`"Колян, а как правильно пишется заопарк или зоопарк?" "зоо." "Отсоси у тракториста!"`}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </Link>
        </div>

        <div className="top-[2060px]  left-[1730px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Link href="/">
            <Dialog>
              <DialogTrigger><MapPin size={50} className="font-extrabold" /></DialogTrigger>
              <DialogContent className="top-[2060px]  left-[1730px] flex flex-col justify-center items-center absolute w-[300px] h-[150px]">
                <DialogHeader>
                  <DialogTitle>Мой театр</DialogTitle>
                  <DialogDescription>
                    Рыдал в нём не раз
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </Link>
        </div>

        <div className="top-[2470px] left-[1980px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Link href="/">
            <Dialog>
              <DialogTrigger><MapPin size={50} className="font-extrabold" /></DialogTrigger>
              <DialogContent className="top-[2470px] left-[1980px] flex flex-col justify-center items-center absolute w-[300px] h-[150px]">
                <DialogHeader>
                  <DialogTitle>Мост Аньки</DialogTitle>
                  <DialogDescription>
                    Баба держит своего коня в узде... Классика 
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </Link>
        </div>

        <div className="top-[2450px] left-[1920px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Link href="/">
            <Dialog>
              <DialogTrigger><MapPin size={50} className="font-extrabold" /></DialogTrigger>
              <DialogContent className="top-[2450px] left-[1920px] flex flex-col justify-center items-center absolute w-[300px] h-[150px]">
                <DialogHeader>
                  <DialogTitle>Отличный ресторан</DialogTitle>
                  <DialogDescription>
                    Лучший Цезарь в городе... <br/> Так же иногда играют на скрипке. Кайф.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </Link>
        </div>

        <div className="top-[2570px] left-[2160px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Link href="/">
            <Dialog>
              <DialogTrigger><MapPin size={50} className="font-extrabold" /></DialogTrigger>
              <DialogContent className="top-[2570px] left-[2160px] flex flex-col justify-center items-center absolute w-[300px] h-[150px]">
                <DialogHeader>
                  <DialogTitle>Вокзал обрыга</DialogTitle>
                  <DialogDescription>
                    Сюда ты приедешь
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </Link>
        </div>

        <div className="top-[2620px] left-[2120px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Link href="/">
            <Dialog>
              <DialogTrigger><MapPin size={50} className="font-extrabold" /></DialogTrigger>
              <DialogContent className="top-[2620px] left-[2120px] flex flex-col justify-center items-center absolute w-[300px] h-[150px]">
                <DialogHeader>
                  <DialogTitle>ТЦ Галерея</DialogTitle>
                  <DialogDescription>
                    Осколок Москвы в Питере...
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </Link>
        </div>

        <div className="top-[2520px] left-[2140px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Link href="/">
            <Dialog>
              <DialogTrigger><MapPin size={50} className="font-extrabold" /></DialogTrigger>
              <DialogContent className="top-[2470px] left-[2160px] flex flex-col justify-center items-center absolute w-[300px] h-[150px]">
                <DialogHeader>
                  <DialogTitle>Обелиск... ВАУ!</DialogTitle>
                  <DialogDescription>
                    ...
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </Link>
        </div>

        <div className="top-[2290px] left-[1890px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Link href="/">
            <Dialog>
              <DialogTrigger><MapPin size={50} className="font-extrabold" /></DialogTrigger>
              <DialogContent className="top-[2290px] left-[1890px] flex flex-col justify-center items-center absolute w-[300px] h-[150px]">
                <DialogHeader>
                  <DialogTitle>Парк</DialogTitle>
                  <DialogDescription>
                    Стихи на камнях стоит почитать. 
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </Link>
        </div>

        <div className="top-[2140px] left-[1870px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Link href="/">
            <Dialog>
              <DialogTrigger><MapPin size={50} className="font-extrabold" /></DialogTrigger>
              <DialogContent className="top-[2140px] left-[1870px] flex flex-col justify-center items-center absolute w-[300px] h-[150px]">
                <DialogHeader>
                  <DialogTitle>Ресторан-корабль</DialogTitle>
                  <DialogDescription>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </Link>
        </div>

        <div className="top-[2350px] left-[1870px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Link href="/">
            <Dialog>
              <DialogTrigger><MapPin size={50} className="font-extrabold" /></DialogTrigger>
              <DialogContent className="top-[2350px] left-[1870px] flex flex-col justify-center items-center absolute w-[300px] h-[150px]">
                <DialogHeader>
                  <DialogTitle>Спас на крови</DialogTitle>
                  <DialogDescription>
                    Разноцветный-тортик-церковь
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </Link>
        </div>

        <div className="top-[2440px] left-[1800px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Link href="/">
            <Dialog>
              <DialogTrigger><MapPin size={50} className="font-extrabold" /></DialogTrigger>
              <DialogContent className="top-[2440px] left-[1800px] flex flex-col justify-center items-center absolute w-[300px] h-[150px]">
                <DialogHeader>
                  <DialogTitle>Казанский</DialogTitle>
                  <DialogDescription>
                    Я б в таком домике бы пожил 
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </Link>
        </div>

        <div className="top-[2380px] left-[1740px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Link href="/">
            <Dialog>
              <DialogTrigger><MapPin size={50} className="font-extrabold" /></DialogTrigger>
              <DialogContent className="top-[2380px] left-[1740px] flex flex-col justify-center items-center absolute w-[300px] h-[150px]">
                <DialogHeader>
                  <DialogTitle>Еще обелиск... Площадь</DialogTitle>
                  <DialogDescription>
                    На севере Эрмитаж... Третьяковка Круче. 
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </Link>
        </div>

        <div className="top-[2340px] left-[1760px] flex items-center text-3xl font-extrabold justify-center absolute  text-black">
          <Link href="/">
            <Dialog>
              <DialogTrigger><MapPin size={50} className="font-extrabold" /></DialogTrigger>
              <DialogContent className="top-[2350px] left-[1870px] flex flex-col justify-center items-center absolute w-[300px] h-[150px]">
                <DialogHeader>
                  <DialogTitle>Титаны</DialogTitle>
                  <DialogDescription>
                    Потри ему большой пальчик... <br/>
                    Сбудеться желание так как тебе нафиг не надо
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </Link>
        </div>














      </div>
    </main>
  );
}
