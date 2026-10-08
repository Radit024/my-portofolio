import React, {useState, useEffect, useContext} from "react";
import "./GithubProfile.scss";
import {githubProfile} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {Fade} from "../../components/fade/Fade";

const fallbackData = {
  name: "Daffa Radityo Adjiefirmansyah",
  login: githubProfile.userName || "Radit024",
  avatarUrl: "https://avatars.githubusercontent.com/u/95222352?v=4",
  bio: "Software Engineer & Quantitative Systems Developer specializing in Automated Trading, Decision Support Systems, and Web3 Architecture.",
  location: "Indonesia",
  company: "PT Arina Cakrawala Semesta",
  public_repos: 25,
  followers: 7,
  following: 10,
  html_url: `https://github.com/${githubProfile.userName || "Radit024"}`
};

export default function GithubProfile() {
  const {isDark} = useContext(StyleContext);
  const [profile, setProfile] = useState(fallbackData);
  const [totalContributions, setTotalContributions] = useState(752);

  const localFallbackChart =
    require("../../assets/images/githubContributions.svg").default ||
    require("../../assets/images/githubContributions.svg");

  const chartColor = isDark ? "a78bfa" : "6c63ff";
  const [chartSrc, setChartSrc] = useState(
    `https://ghchart.rshah.org/${chartColor}/${fallbackData.login}`
  );

  useEffect(() => {
    const username = githubProfile.userName || "Radit024";

    // 1. Fetch GitHub user details
    fetch(`https://api.github.com/users/${username}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("GitHub user fetch failed");
      })
      .then(data => {
        setProfile({
          name: data.name || fallbackData.name,
          login: data.login || fallbackData.login,
          avatarUrl: data.avatar_url || fallbackData.avatarUrl,
          bio: data.bio && data.bio !== "Bio?" ? data.bio : fallbackData.bio,
          location: data.location || fallbackData.location,
          company: data.company || fallbackData.company,
          public_repos: data.public_repos ?? fallbackData.public_repos,
          followers: data.followers ?? fallbackData.followers,
          following: data.following ?? fallbackData.following,
          html_url: data.html_url || fallbackData.html_url
        });
      })
      .catch(() => {
        // Fallback data is pre-loaded; never gets stuck in loading state
      });

    // 2. Fetch live contribution counts
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Contributions fetch failed");
      })
      .then(data => {
        if (data && data.total) {
          const currentYear = new Date().getFullYear().toString();
          const count =
            data.total[currentYear] ||
            Object.values(data.total).reduce((a, b) => a + b, 0);
          if (count) {
            setTotalContributions(count);
          }
        }
      })
      .catch(() => {
        // Fallback total is pre-loaded
      });
  }, []);

  useEffect(() => {
    const activeColor = isDark ? "a78bfa" : "6c63ff";
    setChartSrc(
      `https://ghchart.rshah.org/${activeColor}/${profile.login || "Radit024"}`
    );
  }, [isDark, profile.login]);

  if (!githubProfile.display) {
    return null;
  }

  const currentYear = new Date().getFullYear();

  return (
    <Fade bottom duration={1000} distance="30px">
      <div className="main github-profile-main" id="github-profile">
        <h1 className="heading github-profile-title">
          {githubProfile.title || "GitHub Profile"}
        </h1>
        <p
          className={
            isDark
              ? "dark-mode subTitle github-profile-subtitle"
              : "subTitle github-profile-subtitle"
          }
        >
          {githubProfile.subtitle ||
            "Explore my open source repositories, projects, and developer activity."}
        </p>

        <div
          className={
            isDark ? "dark-mode github-profile-card" : "github-profile-card"
          }
        >
          {/* Upper Section: Profile Details */}
          <div className="github-profile-top">
            <div className="github-profile-avatar-wrap">
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                className="github-profile-avatar"
                loading="lazy"
              />
            </div>

            <div className="github-profile-info">
              <div className="github-profile-header">
                <h3 className="github-profile-name">{profile.name}</h3>
                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-profile-handle"
                  aria-label={`GitHub profile of @${profile.login}`}
                >
                  @{profile.login}
                </a>
              </div>

              <p className="github-profile-bio">{profile.bio}</p>

              <div className="github-profile-meta">
                {profile.company && (
                  <span className="github-meta-item">
                    <i className="fas fa-building"></i>
                    <span>{profile.company}</span>
                  </span>
                )}
                {profile.location && (
                  <span className="github-meta-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{profile.location}</span>
                  </span>
                )}
              </div>

              <div className="github-profile-stats">
                <div className="github-stat-pill">
                  <span className="stat-number">{profile.public_repos}</span>
                  <span className="stat-label">Repositories</span>
                </div>
                <div className="github-stat-pill">
                  <span className="stat-number">{profile.followers}</span>
                  <span className="stat-label">Followers</span>
                </div>
                <div className="github-stat-pill">
                  <span className="stat-number">{profile.following}</span>
                  <span className="stat-label">Following</span>
                </div>
              </div>

              <div className="github-profile-action">
                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-profile-btn"
                  aria-label="View profile on GitHub"
                >
                  <i className="fab fa-github"></i>
                  <span>View on GitHub</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Lower Section: GitHub Contributions Graph & Activity */}
          <div className="github-contributions-section">
            <div className="github-contributions-header">
              <div className="github-contributions-title">
                <h4>Contribution Activity</h4>
              </div>
              <div className="github-contributions-badge">
                <span className="contributions-count-num">
                  {totalContributions}+
                </span>
                <span className="contributions-count-text">
                  contributions in {currentYear}
                </span>
              </div>
            </div>

            <div className="github-calendar-scroll-wrap">
              <img
                src={chartSrc}
                alt={`${profile.name}'s GitHub Contribution Calendar`}
                className="github-calendar-img"
                loading="lazy"
                onError={() => setChartSrc(localFallbackChart)}
              />
            </div>

            <div className="github-contributions-footer">
              <span className="github-calendar-note">
                <i className="fas fa-info-circle"></i> Daily public contribution
                activity over the past year
              </span>
              <a
                href={`https://github.com/${profile.login}`}
                target="_blank"
                rel="noopener noreferrer"
                className="github-calendar-link"
              >
                <span>View activity on GitHub</span>
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
