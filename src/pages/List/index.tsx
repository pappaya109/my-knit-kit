import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import * as styles from './List.css';
import { getProjects } from '../../lib/projects';
import type { Project } from '../../types/project';
import socksIcon from '../../assets/socks_icon.svg';
import shirtIcon from '../../assets/shirt_icon.svg';
import mufflerIcon from '../../assets/muffler_icon.svg';
import bagIcon from '../../assets/bag_icon.svg';
import starIcon from '../../assets/star_icon.svg';

const categoryIcons: Record<Project['category'], string> = {
  socks: socksIcon,
  shirt: shirtIcon,
  muffler: mufflerIcon,
  bag: bagIcon,
  etc: starIcon,
};

const List = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getProjects()
      .then(setProjects)
      .catch(() => setError('프로젝트를 불러오는 데 실패했습니다.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <svg
          className={styles.folderIcon}
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M1 5C1 3.9 1.9 3 3 3H9.5L11.5 6H21C22.1 6 23 6.9 23 8V17C23 18.1 22.1 19 21 19H3C1.9 19 1 18.1 1 17V5Z"
            stroke="#6b4d4d"
            strokeWidth="1.5"
          />
        </svg>
        <h1 className={styles.title}>내 프로젝트</h1>
      </header>

      <div className={styles.divider} />

      {error && <p className={styles.errorText}>{error}</p>}

      {!loading && !error && (
        <main className={styles.list}>
          <button className={styles.item} onClick={() => navigate('/createfo')}>
            <span className={styles.itemContent}>
              <span className={styles.addSign}>+</span>
              <span>프로젝트 생성하기</span>
            </span>
          </button>

          {projects.map((project) => (
            <button
              key={project.id}
              className={styles.item}
              onClick={() => navigate(`/myfo/${project.id}`)}
            >
              <span className={styles.itemContent}>
                <img
                  src={categoryIcons[project.category]}
                  className={styles.categoryIcon}
                  alt=""
                  aria-hidden="true"
                />
                <span>{project.name}</span>
              </span>
            </button>
          ))}
        </main>
      )}
    </div>
  );
};

export default List;
