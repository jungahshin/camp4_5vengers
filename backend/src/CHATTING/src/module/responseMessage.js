module.exports = {//서버들끼리의 원활한 소통을 위해서 응답메세지를 통일
    NULL_VALUE: "필요한 값이 없습니다",
    INTERNAL_SERVER_ERROR : "INTERNAL_SERVER_ERROR",
    OUT_OF_VALUE: "파라미터 값이 잘못되었습니다",
    ID_OR_PW_NULL_VALUE: "아이디/비밀번호 값이 없습니다.",
    CREATED_USER: "회원 가입 성공",
    DELETE_USER: "회원 탈퇴 성공",

    ALREADY_USER: "이미 회원입니다.",
    NO_USER: "존재하지 않는 회원입니다.",
    MISS_MATCH_PW: "비밀번호가 맞지 않습니다.",
    LOGIN_SUCCESS: "로그인 성공",
    LOGIN_FAIL: "로그인 실패",
    LOGOUT_SUCCESS: "로그아웃 성공",
    LOGOUT_FAIL: "로그아웃 실패",
    DB_ERROR:"db error",
    REFRESH_UPDATE_ERROR: 'refreshtoken DB등록 오류',
    NOT_CORRECT_REFRESH_TOKEN: 'refreshtoken이 만료되었습니다.',
    USER_INSERT_FAIL: 'user insert fail',
    SIGNUP_SUCCESS: '회원 가입 성공',
    SIGNUP_FAIL: '중복된 email이 존재합니다.',
    REFRESH_UPDATE_ERROR:'refresh update fail',
    EMPTY_TOKEN:'토큰이 없습니다.',
    EXPRIED_TOKEN:'만료된 토큰입니다.',
    INVALID_TOKEN:'잘못된 형식의 토큰입니다.',
    REFRESH_TOKEN:'토큰 발급 완료!',
    USER_DELETE_FAIL:'user 계정 삭제 실패',
    USER_DELETE_SUCCESS:'user 계정 삭제 성공!',

    NOT_MATCH: "작성자와 일치하지 않습니다",

    X_CREATE_SUCCESS: (x) => `${x} 작성 성공`,
    X_CREATE_FAIL: (x) => `${x} 작성 실패`,
    X_READ_ALL_SUCCESS: (x) => `${x} 전체 조회 성공`,
    X_READ_ALL_FAIL: (x) => `${x} 전체 조회 실패`,
    X_READ_SUCCESS: (x) => `${x} 조회 성공`,
    X_READ_FAIL: (x) => `${x} 조회 실패`,
    X_UPDATE_SUCCESS: (x) => `${x} 수정 성공`,
    X_UPDATE_FAIL: (x) => `${x} 수정 실패`,
    X_DELETE_SUCCESS: (x) => `${x} 삭제 성공`,
    X_DELETE_FAIL: (x) => `${x} 삭제 실패`,  
    X_EMPTY: (x) => `존재하지 않는 ${x} 입니다.`,
    NO_X: (x) => `존재하는 ${x} 입니다.`,
    ALREADY_X: (x) => `존재하는 ${x} 입니다.`,

    COMMENT_CREATE_FAIL : "댓글 작성 실패",
    COMMENT_CREATE_SUCCESS : "댓글 작성 성공",
    COMMENT_READ_FAIL : "댓글 조회 실패",
    COMMENT_READ_SUCCESS : "댓글 조회 성공",
    STORY_READ_FAIL : "스토리 조회 실패",
    STORY_READ_SUCCESS : "스토리 조회 성공",
    STORY_CATEGORY_READ_FAIL : "스토리 카테고리별 조회 실패",
    STORY_CATEGORY_READ_SUCCESS : "스토리 카테고리별 조회 성공",
    STORY_COUNT_READ_FAIL : "스토리 조회순별 조회 실패",
    STORY_COUNT_READ_SUCCESS : "스토리 조회순별 조회 성공",
    STORY_COMMENT_COUNT_FAIL : "스토리 댓글 개수 반환 실패",
    STORY_COMMENT_COUNT_SUCCESS : "스토리 댓글 개수 반환 성공",
    STORY_CATEGORY_SORT_READ_FAIL : "스토리 category, sort 필터 실패",
    STORY_CATEGORY_SORT_READ_SUCCESS : "스토리 category, sort 필터 성공",
    CALENDER_JOB_ALREADY_EXIST : "이미 캘린더에 추가된 공고입니다."

};