-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        8.0.17 - MySQL Community Server - GPL
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- amazon 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `amazon` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `amazon`;

-- 테이블 amazon.downside_slide 구조 내보내기
CREATE TABLE IF NOT EXISTS `downside_slide` (
  `image_url` text NOT NULL,
  `color` text NOT NULL,
  `link_url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 amazon.downside_slide:~5 rows (대략적) 내보내기
/*!40000 ALTER TABLE `downside_slide` DISABLE KEYS */;
INSERT INTO `downside_slide` (`image_url`, `color`, `link_url`) VALUES
	('url(\'../images/slide/captain.png\')', 'blue', 'https://www.google.com/search?q=captain+america'),
	('url(\'../images/slide/ironman.png\')', 'gold', 'https://www.google.com/search?q=iron+man'),
	('url(\'../images/slide/spider.png\')', 'orange', 'https://www.google.com/search?q=spider+man'),
	('url(\'../images/slide/thor.png\')', 'gray', 'https://www.google.com/search?q=thor'),
	('url(\'../images/slide/venom.png\')', 'purple', 'https://www.google.com/search?q=venom');
/*!40000 ALTER TABLE `downside_slide` ENABLE KEYS */;

-- 테이블 amazon.upside_card 구조 내보내기
CREATE TABLE IF NOT EXISTS `upside_card` (
  `card_index` int(11) NOT NULL DEFAULT '0',
  `theme` char(50) NOT NULL,
  `title` char(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='the information of upper ui';

-- 테이블 데이터 amazon.upside_card:~5 rows (대략적) 내보내기
/*!40000 ALTER TABLE `upside_card` DISABLE KEYS */;
INSERT INTO `upside_card` (`card_index`, `theme`, `title`) VALUES
	(0, 'ship-card', 'ship'),
	(1, 'system-card', 'system'),
	(2, 'shop-card', 'shop'),
	(3, 'read-card', 'read'),
	(4, 'more-card', 'more');
/*!40000 ALTER TABLE `upside_card` ENABLE KEYS */;

-- 테이블 amazon.upside_slide 구조 내보내기
CREATE TABLE IF NOT EXISTS `upside_slide` (
  `card_index` int(11) NOT NULL,
  `theme` char(50) NOT NULL,
  `keyword` text NOT NULL,
  `image_url` text NOT NULL,
  `title` text,
  `content` text,
  `link` text,
  `link_text` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='the slide of down ui';

-- 테이블 데이터 amazon.upside_slide:~18 rows (대략적) 내보내기
/*!40000 ALTER TABLE `upside_slide` DISABLE KEYS */;
INSERT INTO `upside_slide` (`card_index`, `theme`, `keyword`, `image_url`, `title`, `content`, `link`, `link_text`) VALUES
	(0, 'ship-card', '졸립지 않나요?', '../images/card/slide_image/0.png', '어제 잘 주무셨나요?', '야근을 한다거나 게임, TV 시청 등의 이유로 늦게까지 깨어있으면, 수면을 취하는 시간이 그만큼 짧아질 수밖에 없는데요. 하루에 7시간 미만의 충분한 수면을 취하지 못하게 되면, 아침에 일어나는 것이 매우 힘겹게 느껴질 수 있습니다. 또한, 수면이 부족하면 과식으로 이어지고, 면역 체계가 크게 떨어지며, 여러 건강 상 문제가 발생할 수 있습니다.', 'https://www.youtube.com/watch?v=O6w4H8tFLQ4', '영상을 보고 기운내요!'),
	(0, 'ship-card', '전 너무 졸려요', '../images/card/slide_image/1.png', '잠은 필요할때 자는게 최고죠!', '수면부족은 사람들이 가진 가장 흔한 문제 중 하나이다. 일반적인 원인으로는 건강 관련 문제, 시간 부족 혹은 건강하지 않은 방법으로 잠을 자는 것 등이 있다. 하지만 다행히도 노력하기만 하면 더 나은 수면을 취할 수 있다.', 'https://wonderfulmind.co.kr/deep-sleep-tip/', '뉴스기사에 좋은 정보가 있어요!'),
	(0, 'ship-card', '수면시간 보장해야해요', '../images/card/slide_image/2.png', '왜 잠을 잘 자지 못할까요?', '많은 사람들이 환절기 때 잠이 드는데 어려움을 겪는다. 기온의 변화는 보통 해가 떠있을 때와 마찬가지로 큰 역할을 한다. 이때는 보통 불면증이 생기고 반복적인 문제가 되는 시기이다.', 'https://www.youtube.com/watch?v=O6w4H8tFLQ4', '영상을 보고 기운내요!'),
	(0, 'ship-card', '언제 끝날까요', '../images/card/slide_image/3.png', '계절의 변화', '계절의 변화가 반드시 모든 사람에게 같은 방식으로 영향을 미치는 것은 아니다. 일반적으로 영향을 받는 사람들은 보통 몇주 동안은 정상적으로 잠을 잘 수 있을 것이다. 그 후 긴장을 풀고 상황에 의해 흥분하지 않는 법을 배우는 것에 대한 문제이다.', 'https://wonderfulmind.co.kr/deep-sleep-tip/', '뉴스기사에 좋은 정보가 있어요!'),
	(1, 'system-card', 'ZZZ', '../images/card/slide_image/4.png', '스트레스와 불안', '높은 수준의 스트레스와 불안은 잠이 들거나 혹은 그 후에 피곤함에 있어 크게 부정적인 영향을 미친다. 이는 당신의 뇌가 경계 태세에 있고 적절히 쉴 수 없게 하기 때문이다.', 'https://www.youtube.com/watch?v=O6w4H8tFLQ4', '영상을 보고 기운내요!'),
	(1, 'system-card', '아 재미없다.', '../images/card/slide_image/5.png', '전자기기에의 노출', '밤에 전자기기 사용으로 인한 과도한 자극은 수면 주기에 부정적인 영향을 미칠 수 있다는 것이 입증되었다. 더 잘 자기 위해 가장 좋은 조언 중 하나는 잠들기 직전에 뇌를 너무 많이 작동시키는 어떤 것이든 멀리하는 것이다.', 'https://wonderfulmind.co.kr/deep-sleep-tip/', '뉴스기사에 좋은 정보가 있어요!'),
	(1, 'system-card', '집에... 갈까?', '../images/card/slide_image/6.png', '숙면을 취하는 데 도움이 되는 팁', '운동은 당신을 건강하게 만들기도 하지만, 당신을 지치게 하는 좋은 방법이다. 당신의 몸은 운동 후 피로를 느낄 것이고 쉬고 싶어질 것이다. 같은 효과가 마음에도 일어나 운동으로 인해 생긴 엔돌핀은 긍정적 효과를 만들어 낼 것이다.', 'https://www.youtube.com/watch?v=O6w4H8tFLQ4', '영상을 보고 기운내요!'),
	(1, 'system-card', '너무 추워요...', '../images/card/slide_image/7.png', '정해진 일과 시간 설정하기', '일과를 정하고 그에 따르는 것은 훨씬 조직화된 삶을 사는데 도움이 될 것이다. 또한 잠을 자는 시간에 있어 당신의 몸을 혼란스럽게 하는 것을 막아줄 것이다. 잠자기 전 클래식 음악을 듣거나, 독서, 혹은 명상을 하는 등의 활동은 언제나 좋다.', 'https://wonderfulmind.co.kr/deep-sleep-tip/', '뉴스기사에 좋은 정보가 있어요!'),
	(1, 'system-card', '에어컨 꺼주세요 호호', '../images/card/slide_image/8.png', '카페인이 함유된 음료 마시지 않기', '커피, 차, 카페인이 들어간 탄산음료와는 완전히 작별해야 한다. 아니면 적어도 아침에만 마시도록 해야한다. 그러면 잠자기가 훨씬 쉬워질 것이다. 밤에는 이런 음료를 절대 마셔서는 안된다. 대신 주스, 우유, 허브차, 혹은 심지어 물 등을 마시도록 하자.', 'https://www.youtube.com/watch?v=O6w4H8tFLQ4', '영상을 보고 기운내요!'),
	(2, 'shop-card', '하하하하하하하', '../images/card/slide_image/9.png', '긴 낮잠 자지 않기', '많은 사람들이 한낮에 긴 낮잠을 잔다. 이는 좋을 수도 있지만, 만약 수면 문제를 가지고 있다면, 이를 멈추려고 노력해야 한다. 그렇게 하면 밤이 되면 훨씬 더 졸려움을 느낄 것이고, 제대로 잠을 자는데 문제가 없을 것이다.', 'https://wonderfulmind.co.kr/deep-sleep-tip/', '뉴스기사에 좋은 정보가 있어요!'),
	(2, 'shop-card', '힘들어요...', '../images/card/slide_image/10.png', '스트레스와 불안', '높은 수준의 스트레스와 불안은 잠이 들거나 혹은 그 후에 피곤함에 있어 크게 부정적인 영향을 미친다. 이는 당신의 뇌가 경계 태세에 있고 적절히 쉴 수 없게 하기 때문이다.', 'https://www.youtube.com/watch?v=O6w4H8tFLQ4', '영상을 보고 기운내요!'),
	(2, 'shop-card', '힘내요!', '../images/card/slide_image/11.png', '생체 시계를 일정하게 맞춰라', '어떻게: 수면 일정을 정하고 매일 밤 지켜라. 이유: 일정 루틴을 지키는 게 신체가 적응하기 좋다. 당신은 기분이 더 좋아질 것이다. 매일 밤 얼마를 자든지 간에 생체 시계를 일정하게 유지하라. 매일 밤과 아침에 잠자리에 드는 시간을 정해두고 지켜라.', 'https://wonderfulmind.co.kr/deep-sleep-tip/', '뉴스기사에 좋은 정보가 있어요!'),
	(2, 'shop-card', '안녕....', '../images/card/slide_image/12.png', '잠자리에 들기 전 느긋한 상태가 되어라', '저녁 내내 일하고 자기 직전에야 컴퓨터를 끄거나 서류를 내려놓게 되는 일은 너무나 자주 생긴다. 그러지 말고 따뜻한 음료(밤에는 카페인이 없는 차나 커피를 마셔라)를 마시고 책을 읽으며 30분 정도 쉬어라(일과 관련된 책은 안 된다). 아니면 TV 앞에 잠시 앉아 있어라. 잠들기가 훨씬 더 쉬워지고, 다음 날 아침 기분도 더 좋고 생산성도 더 높아질 것이다.', 'https://www.youtube.com/watch?v=O6w4H8tFLQ4', '영상을 보고 기운내요!'),
	(3, 'read-card', '계속 확인할건가요?', '../images/card/slide_image/13.png', '카페인이 함유된 음료 마시지 않기', '커피, 차, 카페인이 들어간 탄산음료와는 완전히 작별해야 한다. 아니면 적어도 아침에만 마시도록 해야한다. 그러면 잠자기가 훨씬 쉬워질 것이다. 밤에는 이런 음료를 절대 마셔서는 안된다. 대신 주스, 우유, 허브차, 혹은 심지어 물 등을 마시도록 하자.', 'https://wonderfulmind.co.kr/deep-sleep-tip/', '뉴스기사에 좋은 정보가 있어요!'),
	(3, 'read-card', '혹시 집 화장실 불 끄고 왔나요?', '../images/card/slide_image/14.png', '잠은 필요할때 자는게 최고죠!', '수면부족은 사람들이 가진 가장 흔한 문제 중 하나이다. 일반적인 원인으로는 건강 관련 문제, 시간 부족 혹은 건강하지 않은 방법으로 잠을 자는 것 등이 있다. 하지만 다행히도 노력하기만 하면 더 나은 수면을 취할 수 있다.', 'https://www.youtube.com/watch?v=O6w4H8tFLQ4', '영상을 보고 기운내요!'),
	(4, 'more-card', '당신은 이제 숨쉬는것을 의식하게 됩니다.', '../images/card/slide_image/15.png', '잠자리에 들기 전 느긋한 상태가 되어라', '저녁 내내 일하고 자기 직전에야 컴퓨터를 끄거나 서류를 내려놓게 되는 일은 너무나 자주 생긴다. 그러지 말고 따뜻한 음료(밤에는 카페인이 없는 차나 커피를 마셔라)를 마시고 책을 읽으며 30분 정도 쉬어라(일과 관련된 책은 안 된다). 아니면 TV 앞에 잠시 앉아 있어라. 잠들기가 훨씬 더 쉬워지고, 다음 날 아침 기분도 더 좋고 생산성도 더 높아질 것이다.', 'https://wonderfulmind.co.kr/deep-sleep-tip/', '뉴스기사에 좋은 정보가 있어요!'),
	(4, 'more-card', '후하후하', '../images/card/slide_image/16.png', '정해진 일과 시간 설정하기', '일과를 정하고 그에 따르는 것은 훨씬 조직화된 삶을 사는데 도움이 될 것이다. 또한 잠을 자는 시간에 있어 당신의 몸을 혼란스럽게 하는 것을 막아줄 것이다. 잠자기 전 클래식 음악을 듣거나, 독서, 혹은 명상을 하는 등의 활동은 언제나 좋다.', 'https://www.youtube.com/watch?v=O6w4H8tFLQ4', '영상을 보고 기운내요!'),
	(1, 'system-card', '추가된카드', '../images/card/slide_image/15.png', '추가추가', '추카추카', 'ㅁㄴㅇㄹㄴㅁㅇㄹ', 'ㅁㄴㅇㄻㄴㅇㄹ');
/*!40000 ALTER TABLE `upside_slide` ENABLE KEYS */;

-- 테이블 amazon.user 구조 내보내기
CREATE TABLE IF NOT EXISTS `user` (
  `id` char(20) NOT NULL,
  `password` char(20) NOT NULL,
  `admin` char(5) NOT NULL DEFAULT 'false'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 amazon.user:~2 rows (대략적) 내보내기
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `password`, `admin`) VALUES
	('admin', '12341234', 'true'),
	('testid', '43214321', 'true');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
