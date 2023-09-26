import React from "react";
import TopBar from "../components/shared/TopBar";
import {
  SettingContent,
  SettingEmail,
  SettingMyInfo,
  SettingNick,
  SettingName,
  SettingSms,
  SettingEmailBtn,
  SettingNickBtn,
  SettingSns,
  SettingGoogle,
  SettingGoogleBtn,
} from "../styles/Setting.style";

export default function SettingPage() {
  return (
    <>
      <TopBar></TopBar>
      <SettingContent>
        <SettingMyInfo>내 정보</SettingMyInfo>
        <SettingEmail>
          이메일 <br />
          dddddddd@dddddd.com
        </SettingEmail>
        <SettingEmailBtn />
        <SettingNick>
          닉네임 <br />
          bbbbb
        </SettingNick>
        <SettingNickBtn />
        <SettingName>
          이름 <br />
          aaaa
        </SettingName>
        <SettingSms>sms인증</SettingSms>

        <SettingSns>연결된 SNS</SettingSns>
        <SettingGoogle>
          이메일 <br />
          dddddddd@dddddd.com
        </SettingGoogle>
        <SettingGoogleBtn />
      </SettingContent>
    </>
  );
}
