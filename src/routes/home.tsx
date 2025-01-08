import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 700;
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  padding: 10px;
`;

const GroupCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 24px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(255, 240, 245, 0.9) 20%,
    rgba(240, 255, 245, 0.9) 40%,
    rgba(240, 248, 255, 0.9) 60%,
    rgba(248, 240, 255, 0.9) 80%,
    rgba(255, 255, 255, 0.95) 100%
  );
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(147, 112, 219, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
    color: #2d3436;
  }

  p {
    color: #636e72;
    line-height: 1.5;
    margin: 8px 0;
  }

  .members {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #00b894;
    font-weight: 500;
    margin-bottom: 12px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(147, 112, 219, 0.1);
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.98) 0%,
      rgba(255, 245, 250, 0.95) 20%,
      rgba(245, 255, 250, 0.95) 40%,
      rgba(245, 250, 255, 0.95) 60%,
      rgba(250, 245, 255, 0.95) 80%,
      rgba(255, 255, 255, 0.98) 100%
    );
  }
`;

// 임시 데이터 - 나중에 API로 대체
const recommendedGroups = [
  {
    id: 1,
    name: '오픈소스 프로젝트',
    members: 15,
    description: 'React 기반 디자인 시스템 개발',
  },
  {
    id: 2,
    name: '사이드 프로젝트',
    members: 25,
    description: '개발자 커뮤니티 플랫폼 개발',
  },
  {
    id: 3,
    name: '스터디 그룹',
    members: 10,
    description: '시스템 디자인 스터디',
  },
];

// 임시 이벤트 데이터 추가
const localEvents = [
  {
    id: 1,
    title: '프론트엔드 컨퍼런스',
    date: '2024.04.15',
    location: '서울 강남구',
    description: '최신 웹 개발 트렌드와 기술',
    category: '컨퍼런스',
  },
  {
    id: 2,
    title: '개발자 네트워킹',
    date: '2024.04.20',
    location: '서울 마포구',
    description: '현직 개발자들과의 만남',
    category: '네트워킹',
  },
  {
    id: 3,
    title: '해커톤',
    date: '2024.04.22',
    location: '서울 송파구',
    description: '48시간 프로젝트 개발 대회',
    category: '해커톤',
  },
];

const EventCard = styled(GroupCard)`
  .category {
    display: inline-block;
    padding: 6px 12px;
    background: linear-gradient(90deg, #ff6b6b, #ffa07a);
    color: white;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 12px;
  }

  .event-info {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
    color: #636e72;
    font-size: 14px;

    svg {
      color: #00b894;
    }
  }
`;

const SectionTitle = styled(Title)`
  margin-top: 50px;
`;

export default function Home() {
  return (
    <Wrapper>
      <Title>추천 사이드 프로젝트 ✨</Title>
      <CardGrid>
        {recommendedGroups.map((group) => (
          <GroupCard key={group.id}>
            <h3>{group.name}</h3>
            <div className="members">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              {group.members}명 참여중
            </div>
            <p>{group.description}</p>
          </GroupCard>
        ))}
      </CardGrid>

      <SectionTitle>추천 이벤트 🎉</SectionTitle>
      <CardGrid>
        {localEvents.map((event) => (
          <EventCard key={event.id}>
            <span className="category">{event.category}</span>
            <h3>{event.title}</h3>
            <div className="event-info">
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                {event.location}
              </div>
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                </svg>
                {event.date}
              </div>
            </div>
            <p>{event.description}</p>
          </EventCard>
        ))}
      </CardGrid>
    </Wrapper>
  );
}
