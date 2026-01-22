import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import "../styles/github.css";

// --------------------
// Types
// --------------------
type GithubRepo = {
  id: number;
  full_name: string;
  html_url: string;
  stargazers_count: number;
};

type GithubApiResponse = {
  items: GithubRepo[];
};

type GithubUser = {
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
};

// --------------------
// Component
// --------------------
const GithubSection = () => {
  const { user } = useAuth();

  const [query, setQuery] = useState("");
  const [profile, setProfile] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔒 Guest restriction
  if (!user || user.isAnonymous) {
    return (
      <p className="github-guest">
        Login to search GitHub profiles and repositories.
      </p>
    );
  }

  const handleSearch = async () => {
    if (!query.trim()) return;

    if (!navigator.onLine) {
      setError("You are offline. Cannot search GitHub.");
      return;
    }

    setLoading(true);
    setError("");
    setProfile(null);
    setRepos([]);

    try {
      const profileRes = await fetch(
        `https://api.github.com/users/${query}`
      );
      if (!profileRes.ok) throw new Error();

      const profileData: GithubUser = await profileRes.json();
      setProfile(profileData);

      const repoRes = await fetch(
        `https://api.github.com/search/repositories?q=user:${query}`
      );
      if (!repoRes.ok) throw new Error();

      const repoData: GithubApiResponse = await repoRes.json();
      setRepos(repoData.items.slice(0, 8));
    } catch {
      setError("GitHub user not found or API error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="github-container">
      {/* Search */}
      <div className="github-search-card">
        <h3>Search GitHub</h3>

        <div className="github-search-row">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter GitHub username"
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      {loading && <p className="github-status">Searching GitHub...</p>}
      {error && <p className="github-error">{error}</p>}

      {/* Profile */}
      {profile && (
        <div className="github-profile-card">
          <img src={profile.avatar_url} alt={profile.login} />

          <div>
            <h4>{profile.login}</h4>
            {profile.bio && <p>{profile.bio}</p>}

            <div className="github-stats">
              <span>👥 {profile.followers}</span>
              <span>➡ {profile.following}</span>
              <span>📦 {profile.public_repos}</span>
            </div>

            <a
              href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile →
            </a>
          </div>
        </div>
      )}

      {/* Repos */}
      {repos.length > 0 && (
        <>
          <h4 className="github-repo-title">Top Repositories</h4>

          <ul className="github-repo-list">
            {repos.map((repo) => (
              <li key={repo.id} className="github-repo-item">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.full_name}
                </a>
                <span>⭐ {repo.stargazers_count}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default GithubSection;
