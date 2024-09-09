import { StudyConfiguration } from './StudyConfiguration';

const studyConfig: StudyConfiguration = {
  name: 'STUDIG – Student Digital Device Use Study',
  shortDescription:
    'Bislang ist wenig darüber bekannt, wie Wissensarbeit am Rechner abläuft. Ziel dieser Studie ist es, anhand anonymisierter Verhaltensdaten die weltweit erste Typologie der Laptop- und Computernutzung im Studium zu erstellen. Dies ist zugleich die erste Untersuchung, die auf der UZH neu gegründeten D2USP Forschungsplattform basiert. Das Studiendesign umfasst drei Hauptkomponenten: (1) drei Fragebögen, die im Laufe des Semesters erhoben und deren Ergebnisse in der Vorlesung thematisiert werden, (2) die Erfassung anonymer Nutzungsdaten digitaler Geräte und (3) die sporadische Abfrage von Befindlichkeitsdaten (Experience Sampling). Alle Nutzungsdaten und Experience Sampling werden zunächst ausschliesslich lokal auf Ihrem Rechner gespeichert und können später, im Rahmen eines strukturierten Datenspende anonymisiert und gespendet werden. Zu jedem Zeitpunkt ist Ihre Anonymität gesichert. Zwischenergebnisse fliessen in die Vorlesungsinhalte ein, so dass Sie über Ihre Teilnahme-ID soziologisch spannende Erkenntnisse erfahren. Bei Fragen können Sie sich jederzeit vertrauensvoll an Herrn Christopher Vantis wenden, der Ihre Informationen streng vertraulich behandelt. Ihre Teilnahme ist freiwillig!',
  infoUrl: 'https://mydata-lab.uzh.ch/STUDIG/overview.html', // todo: create
  privacyPolicyUrl: 'https://mydata-lab.uzh.ch/STUDIG/privacy.html', // todo: create
  uploadUrl: 'https://mydata-lab.uzh.ch/STUDIG/upload.html', // todo: update
  contactName: 'Dr. Malte Doehne, Dr. André Meyer',
  contactEmail: 'doehne@soziologie.uzh.ch', // todo: update
  subjectIdLength: 6,
  dataExportEnabled: true,
  trackers: {
    windowActivityTracker: {
      enabled: true,
      intervalInMs: 1000,
      trackUrls: true,
      trackWindowTitles: true
    },
    userInputTracker: {
      enabled: true,
      intervalInMs: 5000
    },
    experienceSamplingTracker: {
      enabled: true,
      scale: 3,
      questions: [
        'Ich bin gerade sehr produktiv.',
        'Ich fühle mich gerade motiviert, meine Aufgaben zu erledigen.',
        'Ich fühle mich gerade von der Arbeit am Rechner überwältigt.',
        'Ich fühle mich gerade ruhig und gefasst bei der Arbeit.',
        'Ich arbeite gerade an wichtigen Aufgaben.',
        'Ich fühle mich gerade konzentriert.',
        'Ich bin gerade von meiner Arbeit am Rechner gestresst.',
        'Ich erlebe gerade Momente der Frustration.',
        'Ich geniesse die Aufgaben, an denen ich gerade arbeite.',
        'Ich kann mich gerade ohne Ablenkungen konzentrieren.',
        'Ich finde meine Arbeit gerade intellektuell anregend.',
        'Ich habe gerade Schwierigkeiten, mich auf meine Aufgaben zu konzentrieren.',
        'Ich fühle mich gerade geistig erschöpft.',
        'Ich fühle mich gerade geistig scharf und wach.',
        'Ich finde meine Arbeit gerade langweilig.',
        'Ich nutze meine Zeit gerade effektiv.',
        'Ich schliesse gerade die Aufgaben ab, die ich mir vorgenommen habe.',
        'Ich fühle mich gerade gehetzt, meine Arbeit zu beenden.',
        'Ich fühle mich gerade geistig erfrischt.',
        'Ich habe gerade das Bedürfnis nach einer Pause. '
      ],
      responseOptions: [
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
        ['gar nicht', 'neutral', 'vollständig'],
      ],
      intervalInMs: 1000 * 60 * 60 * 5,  // 5 hours
      samplingRandomization: 0.1 // 10% randomization, so the interval will be between 2.7 and 3.3 hours
    }
  }
};
export default studyConfig;
