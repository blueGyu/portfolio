import Image from "next/image";
import IconButton from "@/components/portfolio/IconButton";
import { Black_Han_Sans } from "next/font/google";

const blackHanSans = Black_Han_Sans({ subsets: ["latin"], weight: "400" });

export default function PortfolioPage() {
  return (
    <main className="space-y-5 px-[150px]">
      <div className={`text-center ${blackHanSans.className}`}>
        <div className="text-5xl text-bold">안녕하세요</div>
        <div className="text-5xl text-bold">애니메이션으로 사용자를 사로잡고 싶은</div>
        <div className="text-5xl text-bold">프론트엔드개발자 이성규입니다</div>
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
        <h2 className="text-2xl font-black">경력</h2>
        <div>
          <h3 className="text-lg font-bold">메이크봇</h3>
          <div>수행기간: 2024.07.08 - </div>
        </div>
      </div>
      <div className="space-y-5">
        <h2 className="text-2xl font-black">프로젝트</h2>
        <div className="space-y-2">
          <h3 className="text-lg font-bold">포트폴리오, 블로그 제작</h3>
          <div>수행기간: 2024.07.08 - </div>
          <div>
            사용스택
            <ul className="list-decimal space-y-1">
              <li className="ml-5">Next.js - 14</li>
              <li className="ml-5">TypeScript</li>
              <li className="ml-5">tailwindcss</li>
              <li className="ml-5">framer motion</li>
            </ul>
          </div>
          <div>
            수행업무
            <ul className="list-decimal space-y-1">
              <li className="ml-5">
                <ul className="list-disc space-y-1">
                  게시글 리스트, 게시글 표시 및 애니메이션 추가
                  <li className="ml-5">마크다운 파일의 metadata를 추출하여 게시글 리스트 작성</li>
                  <li className="ml-5">마크다운 파일의 content를 추출하여 리스트 작성</li>
                  <li className="ml-5">Dynamic Router Segment를 빌드 시 Static segment로 변경</li>
                  <li className="ml-5">코드 복사 버튼 클릭 시 해당 코드를 클립보드에 저장</li>
                  <li className="ml-5">내비게이션 탭 - 마우스 호버 시 현재 선택한 탭 확인</li>
                  <li className="ml-5">드롭다운 메뉴 - 카테고리 확인</li>
                  <li className="ml-5">게시글 리스트 - 마우스 호버 시 현재 선택한 게시글 확인</li>
                  <li className="ml-5">이전글, 다음글 - 마우스 호버 시 현재 선택한 탭 확인</li>
                </ul>
              </li>
              <li className="ml-5">
                <ul className="list-disc space-y-1">
                  포트폴리오 추가
                  <li className="ml-5">이미지 위치에 따라 이미지 변경 애니메이션 추가</li>
                  <li className="ml-5">github, email 아이콘 클릭 시 해당 주소를 클립보드에 저장</li>
                </ul>
              </li>
            </ul>
          </div>
          <p>링크</p>
          <ul className="list-disc">
            <li className="ml-5">깃헙주소</li>
            <li className="ml-5">블로그 게시글 주소</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-bold">도시락 예약 및 카페 모바일주문 사이트 유지보수 및 신규기능 추가</h3>
          <div>수행기간: 2022.01 - 2023.02</div>
          <div>
            사용스택
            <ul className="list-decimal space-y-1">
              <li className="ml-5">php - CodeIgniter2</li>
              <li className="ml-5">jquery</li>
              <li className="ml-5">mariaDB</li>
            </ul>
          </div>
          <div>
            수행업무
            <ul className="list-decimal space-y-1">
              <li className="ml-5">
                할인 쿠폰 기능 추가
                <ul className="list-disc space-y-1">
                  <li className="ml-5">데이터베이스 설계(쿠폰 정보 테이블 추가, 발급받은 유저 데이블 추가)</li>
                  <li className="ml-5">일부 또는 전체 유저에게 도시락/카페 할인 쿠폰 발급, 회수 기능 추가</li>
                  <li className="ml-5">웹 페이지에 테이블 형식으로 데이터 시각화</li>
                </ul>
              </li>
              <li className="ml-5">
                다른 주의 일주일 도시락 메뉴 정보 복사하여 현재 주에 붙여넣는 기능
                <ul className="list-disc space-y-1">
                  <li className="ml-5">복사할 다른 주 선택하는 모달창 추가</li>
                  <li className="ml-5">메뉴 복사 완료 시 현재 주 페이지의 테이블에 복사한 메뉴 표시</li>
                </ul>
              </li>
              <li className="ml-5">
                일주일 도시락 메뉴 전체 수정 기능
                <ul className="list-disc space-y-1">
                  <li className="ml-5">
                    한 주 메뉴 표시하는 테이플에서 메뉴 항목(주메뉴, 부메뉴, 사이드메뉴 등)을 직접 수정할 수 있도록
                    셀마다 form 추가
                  </li>
                  <li className="ml-5">메뉴 수정 완료 시 데이터베이스 메뉴 테이블 업데이트</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-bold">
            카카오톡 홈쇼핑 채널에서 챗봇을 이용한 TV 쇼핑몰 채널에서 방송 중인 제품 구매, 반품 개발 프로젝트 및
            유지보수
          </h3>
          <div>수행기간: 2022.08 - 2023.02</div>
          <div>
            사용스택
            <ul className="list-decimal space-y-1">
              <li className="ml-5">php - CodeIgniter2</li>
              <li className="ml-5">java</li>
            </ul>
          </div>
          <div>
            수행업무
            <ul className="list-decimal space-y-1">
              <li className="ml-5">
                데이터 가공하는 API 작성
                <ul className="list-disc space-y-1">
                  <li className="ml-5">
                    카카오톡 채널에서 받은 데이터로 자바 API에 데이터 요청, 응답받은 결과값 가공하여 카카오 채널에 표시
                  </li>
                </ul>
              </li>
              <li className="ml-5">
                자바 API 수정
                <ul className="list-disc space-y-1">
                  <li className="ml-5">기존 작성되어 있던 코드 수정</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
