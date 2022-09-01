const injurySectionPicker = [
  '얼굴',
  '머리',
  '목',
  '갈비뼈',
  '배',
  '허리',
  '골반',
  '어깨',
  '팔',
  '팔꿈치',
  '손목',
  '손',
  '손가락',
  '허벅지',
  '무릎',
  '정강이',
  '아킬레스건',
  '발목',
  '발',
  '기타',
];

const injuryFormPicker = [
  '뇌진탕',
  '골절',
  '인대부상',
  '근육/건 부상',
  '연골부상',
  '타박상',
  '건염',
  '관절염',
  '충돌',
  '근육경련(쥐)',
  '피부조직 부상',
  '기타',
];

const S3Image = injurySection => {
  switch (injurySection) {
    case '머리':
      return 'head';
    case '얼굴':
      return 'face';
    case '허리':
      return 'waist';
    case '손목':
      return 'wrist';
    case '허벅지':
      return 'thigh';
    case '목':
      return 'neck';
    case '갈비뼈':
      return 'rib';
    case '배':
      return 'belly';
    case '골반':
      return 'pelvis';
    case '팔':
      return 'arm';
    case '팔꿈치':
      return 'elbow';
    case '어깨':
      return 'shoulder';
    case '손':
      return 'hand';
    case '손가락':
      return 'finger';
    case '정강이':
      return 'shin';
    case '아킬레스건':
      return 'achilles';
    case '발목':
      return 'ankle';
    case '발':
      return 'foot';
    case '무릎':
      return 'knee';

    default:
      return '';
  }
};

export {injurySectionPicker, injuryFormPicker, S3Image};
