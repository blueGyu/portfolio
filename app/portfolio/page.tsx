import Image from "next/image";
import IconButton from "@/components/portfolio/IconButton";
import { Black_Han_Sans } from "next/font/google";

const blackHanSans = Black_Han_Sans({ subsets: ["latin"], weight: "400" });

export default function PortfolioPage() {
  return (
    <main className="space-y-5 px-[240px]">
      <div className={`text-center ${blackHanSans.className}`}>
        <div className="text-4xl text-bold">안녕하세요</div>
        <div className="text-4xl text-bold">애니메이션으로 사용자를 사로잡고 싶은</div>
        <div className="text-4xl text-bold">프론트엔드개발자 이성규입니다</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="rounded-full overflow-hidden">
          <Image src="/portfolio/profile.jpg" width={300} height={300} alt="my profile picture" priority />
        </div>
        <div className="flex justify-center space-x-1 mt-5">
          <IconButton id="github" icon="GitHub" comment="https://github.com/blueGyu" popupSide="left" />
          <IconButton id="email" icon="EmailOutlined" comment="bluegyufordev@gmail.com" popupSide="right" />
        </div>
        <span className="text-sm text-center mt-2.5 text-zinc-600">아이콘을 클릭해서 주소를 복사하세요</span>
      </div>
      <div>
        <h2 className="text-2xl">경력</h2>
      </div>
      <div>
        <h2 className="text-2xl">프로젝트</h2>
        <div>
          <h3 className="text-lg">포트폴리오, 블로그 제작</h3>
          <p>2024.07.08 - </p>
          <div>
            사용스택
            <ul className="list-decimal">
              <li className="ml-5">Next.js - 14</li>
              <li className="ml-5">TypeScript</li>
              <li className="ml-5">tailwindcss</li>
              <li className="ml-5">framer motion</li>
            </ul>
          </div>
          <div>
            수행업무
            <ul className="list-decimal">
              <li className="ml-5">
                <ul className="list-disc">
                  게시글 리스트 및 게시글 표시
                  <li className="ml-5"></li>
                </ul>
              </li>
            </ul>
          </div>
          <p>링크</p>
        </div>
      </div>
    </main>
  );
}
