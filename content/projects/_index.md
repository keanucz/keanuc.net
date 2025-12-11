+++
title = "Projects"
+++

# Projects

I've worked on a variety of projects over the years - in my own time, at hackathons, professionally.. I'll list the notable few that I worked on here:

---

## Major personal projects

<div class="project-header"><img src="/images/projects/adobeconnectdl.svg" alt="AdobeConnectDL logo" /><h3>AdobeConnectDL</h3></div>

- I made a utility to download one or more lecture recordings with bundled transcripts, attachments & embedded subtitles from Adobe Connect (so that I could easily grab my uni lecture recordings and watch them offline)
- **GitHub repo:** [github.com/keanucz/AdobeConnectDL](https://github.com/keanucz/AdobeConnectDL)

{{ carousel(images="/images/projects/firefox_2026-04-01_12-40-05.png") }}

<div class="project-header"><img src="/images/projects/brickadiacloud.svg" alt="Brickadia Cloud logo" /><h3>Brickadia Cloud (Dec 2022 - May 2024)</h3></div>

- When I was in high school I coded a full end-to-end platform for hosting dedicated servers for [Brickadia](https://brickadia.com) to develop my Kubernetes/Golang skills.
- For the **backend**: it was composed using Golang, Buf w/ google protobuf and ConnectRPC to add static types to everything (was overkill but cool to overengineer)
- For **orchestration:** I made a bespoke Kubernetes operator using operator-sdk, and painstakingly hand crafted a custom amd64 Docker image containing the Brickadia gameserver runtime combined with a Node.js runtime called [Omegga](https://github.com/brickadia-community/omegga) to dynamically spin up and manage game server instances using port allocation logic borrowed from Google's Agones SDK.
- For **frontend** I basically used 
- I hand crafted this project back when ChatGPT wasn't as good (so this was mostly done in an artisan fashion)

> 🎓 I made a write-up about it for my A-level Computer Science coursework (scored full marks)
> [Email me if you'd like to see it :)](mailto:hello@keanuc.net)

{{ carousel(images="/images/projects/pdfeditor_2026-04-01_12-55-04.png,/images/projects/pdfeditor_2026-04-01_12-55-49.png,/images/projects/pdfeditor_2026-04-01_12-55-59.png") }}

<div class="project-header"><img src="/images/projects/goodblox128.png" alt="GoodBlox logo" /><h3>GoodBlox (December 2017 - February 2019)</h3></div>

- I created GoodBlox — a "ROBLOX revival" site which recreated the 2007-era ROBLOX website's look & feel and enabled you to play games using the 2007 version of the Roblox client. (see: <https://web.archive.org/web/20180420125511/https://goodblox.com/>). When I left it later replicated the 2009 version of the Roblox website (and unfortunately fully shut down around 2021). [someone made a video about it here](https://www.youtube.com/watch?v=lCLst9IB2ic)

{{ carousel(images="/images/projects/firefox_2026-04-01_12-46-26.png") }}

---

## Work for others

- From 2020-2023 I did work for the following clients:
	- Phantom Candy Print — <https://phantomcandyprint.com> (2021)
	- Bob Jolly — <https://bobjolly.com> (2021)
	- Unmuted — <https://unmuted.ltd> (2021-2023)
	- Traqplan — <https://traqplan.com> (2021)

- Between 2019-2021 I contributed to the UK sector file for VATSIM‑UK (virtual air-traffic-control / pilot network) when I was in my flightsim era ([github.com/VATSIM-UK/UK-Sector-File](https://github.com/VATSIM-UK/UK-Sector-File))
- I also contributed to a vSMR plugin for EuroScope: [github.com/pierr3/vSMR](https://github.com/pierr3/vSMR)
- ~2021 - I briefly worked with a research assistant at the University of Cambridge & helped him code a one-shot recognition model for this project: [https://www.cdh.cam.ac.uk/research/projects/digital-approaches-to-the-capture-and-analysis-of-watermarks/](https://www.cdh.cam.ac.uk/research/projects/digital-approaches-to-the-capture-and-analysis-of-watermarks/)
	- I also helped the same person with DevOps and coding a ZeroMQ proxy/sensor handler for the Cambridge component of the Working Age project: [https://workingage.eu/](https://workingage.eu)

- From 2018-2020 I contributed to a Redidt bot called MemeInvestorBot (for the subreddit r/MemeEconomy), a "meme stock market" simulation where users trade memes as assets — repo: [github.com/thecsw/memeinvestor_bot](https://github.com/thecsw/memeinvestor_bot).
- From 2017-2019 I contributed to DTel - a network-style Discord roleplay telephone bot system: [github.com/DTel-HQ/dtel](https://github.com/DTel-HQ/dtel).
