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
- **23-06-03** : #4.0 ~ #4.1 / Class (+ Code Challenge(2 days)[2nd day])
  - 객체지향 프로그래밍(OOP; Object-Oriented Programming)
  - class, instance, abstract, extends, inheritance, {private, protected, public}
  - 키-값을 가지는 object 타입을 선언하는 방법
    - type 타입명 = { [키명:타입]: 타입 }
- **23-06-05** : #4.2 ~ #4.4 / Interface (+ Quiz)
  - readonly, type 선언 시 특정 값을 가지도록 할 수 있음
  - static method
    - class에 직접적으로 연결되는 method
    - class의 instance를 생성하지 않고, class 자체에서 호출이 가능한 method
  - interface
    - object의 모양을 특정해주기 위한 방법 중 하나 (객체 지향 프로그래밍(OOP)에 더 가깝게 사용 가능)
    - JavaScript 코드로 compile 시 코드로 바뀌지 않고 사라짐 (TypeScript에서만 존재)
    - class와 닮아서, 다른 interface를 'extends' 키워드로 상속받을 수 있음
    - 같은 타입명으로 여러 개의 interface를 만든다면, TypeScript가 자동적으로 하나의 interface로 합쳐줌
    - 추상 클래스(abstract class)를 대신 사용해 청사진을 만들 수 있음
      - class가 interface를 상속 받을 시 'implements' 키워드를 사용해야 함
      - 상속 받은 프로퍼티는 public만 사용 가능 (private, protected 사용 불가)
      - 여러 개의 interface를 상속받을 수 있음
    - interface를 type으로도 사용 가능
- **23-06-06** : #4.5 / Polymorphism (+ Code Challenge(2 days)[1st day])
  - 다형성(Polymorphism)
- **23-06-08** : #5.0 ~ #5.4 / Config TypeScript (+ Quiz)
  - TypeScript 패키지 설치, tsconfig.json 파일, tsc
  - tsconfig.json
    - include : compile할 TypeScript 디렉토리
    - compilerOptions
      - outDir : compile 후 생성될 JavaScript 파일의 위치(directory)를 지정
      - target : compile 시 사용할 JavaScript의 버전을 지정
      - lib : 합쳐진 라이브러리(library)의 정의 파일을 특정해주는 역할
        - 코드가 어디에서 동작할지를 알려주는 것
        - 자동완성 및 설명 기능을 제공
        - 정의 파일 : JavaScript 코드의 모양을 TypeScript에게 설명해주는 파일
          - .d.ts의 확장자 파일에서 call signature로 데이터 타입만 작성하면 됨(구현 x)
      - allowJS : JavaScript파일도 확인할 것인지 허용 여부 [T/F]
      - esModuleInterop : import구문을 어디서든지 사용 가능할지의 여부 [T/F]
  - JavaScript파일이 TypeScript의 보호를 받는 방법
    - tsconfig.json - compilerOptions - allowJS: true
    - JS파일에서 '// @ts-check'주석을 추가
    - 함수의 바로 위에 코멘트(/\*\* \*/)로 call signature 추가하기
- **23-06-09** : (+ Final Code Challenge(3 days)[1st day])
  - JSDoc파일을 TypeScript 정의 파일(.d.ts)로 만들기
- **23-06-13** : #5.5 ~ #5.8 / Blockchain
  - 패키지
    - ts-node 패키지 : build없이 TS를 실행할 수 있게하는 패키지
    - nodemon 패키지 : 변경사항이 있을 시 자동으로 script를 재실행 시켜주는 패키지
    - crypto 패키지 : Hash값을 생성할 수 있는 패키지
  - 객체지향(class)과 Hash를 이용해서 블록체인 만들기
