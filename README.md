# TypeScript

### TypeScript - 블록체인 만들기

#### [23-05-29 ~ 23-06-12(2주)] 챌린지 교육 과정.

TypeScript, TSConfig, TSNode
TypeScript에 대해 배워봅니다.

---

노마드 코더 정책 상 강의요약은 괜찮으나, 코드와 필기는 공개적인 곳에 올리면 안 됨.  
필기 요약지는 암호화된 .zip 파일로 저장함.

- **23-05-29** : #1.1 ~ #2.1 / Introduction, Type system (+ Quiz)
  - TypeScript : JavaScript를 기반으로 만들어진 강타입 프로그래밍 언어
    - JavaScript의 여러 문제를 해결 및 보완
    - TypeScript를 컴파일 시 JavaScript로 변환
  - 타입 추론(Type Inference) : 해당 변수의 타입을 추론해 미리 에러를 막음
    - 명시적 기본형 : 'const/let 변수명 : 타입명 = 값'
- **23-05-30** : #2.2 ~ #2.4 / Type of TypeScript (+ Quiz)
  - optional parameter
    - '?'기호를 사용 (ex. age?: number)
    - 명시한 데이터타입 | undefined
  - alias (별칭)
    - 새 이름의 타입을 만든 후 꺼내서 사용
    - 긴 타입 이름이나 복잡한 표현식을 간단한 이름으로 참조 가능
    - 'type 타입변수명'으로 사용 (타입변수명의 첫번째 글자는 대문자로 사용)
    - 객체 타입 뿐만아니라 모든 타입에 대해 사용 가능
  - 함수의 return값의 타입을 지정하는 방법
    - 함수 선언 시 매개변수의 괄호 뒤에 데이터 타입을 명시함
  - readonly
    - 해당 변수를 읽기 전용으로 만들어, 수정이 불가하게 함
    - 타입 선언 시 변수명 앞에 'readonly' 예약어를 적어서 명시함
  - Tuple
    - 배열 선언 시 해당 배열의 최소한의 길이와 특정 위치의 item이 특정 타입을 사용하도록 설정 가능
  - any : 아무 타입이나 가능한 타입 / TypeScript로부터 빠져나오고 싶을 때 사용하는 타입
  - unknown : 해당 변수의 데이터타입을 미리 알지 못할 때 사용 / 사용 시 'typeof'로 타입 조건문을 걸어서 사용
  - void : 아무것도 return하지 않는 함수를 대상으로 함 (aka. C/C++) / 보통 직접 지정하지 않음 (TypeScript가 자동으로 인식)
  - never : 함수가 절대 return하지 않을 때 발생함 / 보통 직접 지정하지 않음 (TypeScript가 자동으로 인식)
    - 함수에서 예외(exception)가 발생할 때
    - 타입이 2가지 일 수도 있는 상황에서도 발생할 수 있음
- **23-05-31** : #3.0 ~ #3.1 / Function(1) (+ Quiz)
  - call signature : 함수의 매개변수와 반환값의 타입을 지정함
  - overloading : 함수가 서로 다른 여러 개의 call signature를 가지고 있을 때 발생
- **23-06-01** : #3.2 ~ #3.4 / Function(2) (+ Code Challenge)
  - 다형성(polymorphism) : 여러 타입을 받아들임으로써 여러 형태를 가지는 것
  - 제네릭(generic) 타입 : 선언 시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법
    - TypeScript가 해당 변수의 타입을 추론해 개발자가 요구한 대로 signature를 생성해줄 수 있는 도구
    - 'generic'은 타입 정보를 알 수 있고, TypeScript로부터 보호를 받을 수 있다는 점이 'any'타입과는 다른점

---

- **23-06-02** : #4.0 ~ #4.1 (+ Code Challenge(2 days)[1st day])
- **23-06-03** : #4.0 ~ #4.1 (+ Code Challenge(2 days)[2nd day])

- **23-06-05** : #4.2 ~ #4.4 (+ Quiz)
- **23-06-06** : #4.5 (+ Code Challenge(2 days)[1st day])
- **23-06-07** : #4.5 (+ Code Challenge(2 days)[2nd day])
- **23-06-08** : #5.0 ~ #5.4 (+ Quiz)
- **23-06-09** : #5.5 ~ #5.8 (+ Final Code Challenge(3 days)[1st day])
- **23-06-10** : (+ Final Code Challenge(3 days)[2nd day])
- **23-06-11** : (+ Final Code Challenge(3 days)[3rd day])
