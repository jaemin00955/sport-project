import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import JoinComm from "./JoinComm";

const renderComponent = () => {
  render(<JoinComm />);
  const joinText = screen.getByText("Join Community");
  const followBtn = screen.getByRole("button");
  const errorMsg = screen.queryByText("팔로우 실패");
  return {
    joinText,
    followBtn,
    errorMsg,
  };
};

describe("커뮤니티 join 컴포넌트", () => {
  test("커뮤니티 join 컴포넌트가 랜더링 되는가", () => {
    // TODO : join community 텍스트
    // TODO : 커뮤니티 프로필, 팀 이름
    // TODO : follow Button
    // TODO : See All Button
    const { joinText } = renderComponent();
    expect(joinText).not.toBeNull();
  });

  // 실패상황
  test("팔로우 버튼 클릭 시, 팔로우 실패 에러 메시지 노출", async () => {
    const { followBtn, errorMsg } = renderComponent();

    // const followBtn = screen.getByAltText("FollowBtn");
    await userEvent.click(followBtn);

    // const errorMsg = screen.queryByText("팔로우 실패");
    expect(errorMsg).not.toBeNull();
  });

  test("See All text 클릭 시, 팔로우 페이지로 이동 실패 에러 메시지 노출", () => {});
  // 성공상황
  test("팔로우버튼을 클릭 시, 팔로우 성공", async () => {
    const { followBtn, errorMsg } = renderComponent();
    // 만약에 click버튼 이전에 input을 할 텍스트등이 있다면 await userEvent.type("~~")을 사용한다.
    await userEvent.click(followBtn, "");

    expect(errorMsg).toBeNull();
  });
  test("See All text 클릭 시, 팔로우 페이지로 이동 성공", () => {});
});
