// ----------------------------------------------------
// ProCV - JavaScript Logic for Live Preview and PDF Export
// ----------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // i18n Translation Dictionary
    // ----------------------------------------------------
    const translations = {
        es: {
            theme_label: "Tema:",
            structure_label: "Estructura:",
            lang_label: "Idioma:",
            btn_import: "Importar",
            btn_export: "Exportar",
            btn_sample: "Ejemplo",
            btn_clear: "Limpiar",
            btn_print: "Imprimir PDF",
            editor_title: "Editor de Datos",
            editor_subtitle: "Rellena los campos y mira la vista previa en tiempo real.",
            sec_personal: "Información Personal",
            sec_profile: "Perfil Profesional (Sobre mí)",
            sec_projects: "Proyectos",
            sec_experience: "Experiencia Laboral",
            sec_education: "Educación",
            sec_softskills: "Habilidades",
            sec_tech: "Tecnología",
            sec_languages: "Idiomas",
            btn_add_project: "Añadir Proyecto",
            btn_add_experience: "Añadir Experiencia",
            btn_add_education: "Añadir Educación",
            btn_add_skill: "Añadir Tecnología",
            btn_add_language: "Añadir Idioma",
            lbl_photo: "Fotografía de Perfil (Opcional)",
            lbl_fullname: "Nombre Completo",
            lbl_title: "Título Profesional / Especialidad",
            lbl_email: "Correo Electrónico",
            lbl_phone: "Teléfono",
            lbl_link: "Enlace Personal / Redes",
            lbl_linkedin: "LinkedIn (URL o Usuario)",
            lbl_website: "Web Personal / Portafolio",
            lbl_location: "Ubicación",
            lbl_sec_title: "Título de la sección",
            lbl_summary: "Breve descripción de ti y tus objetivos",
            lbl_softskills_list: "Lista de Habilidades",
            ph_fullname: "Ej. Juan Pérez",
            ph_title: "Ej. Especialista en Marketing, Gestor de Proyectos",
            ph_email: "Ej. contacto@email.com",
            ph_phone: "Ej. +34 600 000 000",
            ph_link: "Ej. linkedin.com/in/usuario",
            ph_linkedin: "Ej. linkedin.com/in/tu-usuario",
            ph_website: "Ej. tuweb.com",
            ph_location: "Ej. Madrid, España",
            ph_sec_profile: "Ej. Sobre mí, Resumen...",
            ph_summary: "Ej. Profesional con experiencia en gestión de equipos y optimización de procesos...",
            ph_sec_projects: "Ej. Portafolio, Casos de Estudio...",
            ph_sec_experience: "Ej. Experiencia, Historial Laboral...",
            ph_sec_education: "Ej. Educación, Estudios...",
            ph_sec_softskills: "Ej. Habilidades Blandas, Competencias...",
            ph_softskills_list: "Escribe tus habilidades aquí...",
            ph_sec_tech: "Ej. Tecnologías, Herramientas...",
            ph_sec_languages: "Ej. Idiomas, Lenguas...",
            lbl_exp_role: "Puesto / Cargo",
            ph_exp_role: "Ej. Desarrollador Web Prácticas",
            lbl_exp_company: "Empresa",
            ph_exp_company: "Ej. Innova Soft S.L.",
            lbl_exp_dates: "Periodo (Fechas)",
            ph_exp_dates: "Ej. Ene 2025 - Mar 2026",
            lbl_exp_desc: "Descripción / Logros",
            ph_exp_desc: "Ej. Desarrollo de APIs en Java, diseño de vistas responsivas...",
            lbl_proj_name: "Nombre del Proyecto",
            ph_proj_name: "Ej. E-commerce App",
            lbl_proj_tech: "Tecnologías (Separadas por comas)",
            ph_proj_tech: "Ej. Flutter, Firebase, Dart",
            lbl_proj_desc: "Descripción",
            ph_proj_desc: "Ej. Aplicación móvil de gestión logística con base de datos local y offline...",
            lbl_edu_degree: "Titulación / Grado / Certificación",
            ph_edu_degree: "Ej. C.F.G.S. Desarrollo de Aplicaciones Web",
            lbl_edu_school: "Centro de Estudios / Institución",
            ph_edu_school: "Ej. I.E.S. Tecnológico",
            lbl_edu_dates: "Periodo (Fechas)",
            ph_edu_dates: "Ej. 2024 - 2026",
            lbl_skill_name: "Habilidad / Tecnología",
            ph_skill_name: "Ej. Liderazgo, React, Excel",
            lbl_lang_name: "Idioma",
            ph_lang_name: "Ej. Inglés",
            lbl_lang_level: "Nivel",
            opt_basic: "Básico",
            opt_intermediate: "Intermedio",
            opt_advanced: "Avanzado",
            opt_bilingual: "Bilingüe",
            opt_native: "Nativo",
            theme_sapphire: "Zafiro",
            theme_cyberpunk: "Ciberpunk",
            theme_emerald: "Esmeralda",
            theme_nordic: "Nórdico",
            tmpl_modern: "Moderno",
            tmpl_minimal: "Minimalista",
            tmpl_classic: "Clásico",
            tt_toggle_section: "Activar/Desactivar sección",
            tt_drag_move: "Arrastrar para mover",
            tt_move_up: "Subir sección",
            tt_move_down: "Bajar sección",
            tt_remove_photo: "Eliminar Foto",
            tt_remove_item: "Eliminar",
            tt_import: "Importar CV desde archivo JSON",
            tt_export: "Exportar CV a archivo JSON",
            tt_sample: "Cargar datos de ejemplo",
            tt_clear: "Borrar todo",
            tt_print: "Imprimir o guardar como PDF",
            tt_up: "Subir",
            tt_down: "Bajar",
            footer_legal: "Aviso Legal",
            footer_privacy: "Política de Privacidad",
            footer_storage: "Almacenamiento Local",
            legal_title: "Aviso Legal",
            legal_body: `
                <p><strong>1. Datos Identificativos</strong><br>
                En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), se informa que este sitio web es propiedad de [TU NOMBRE/EMPRESA], con domicilio en [TU DIRECCIÓN], y correo electrónico de contacto: [TU EMAIL].</p>
                <p><strong>2. Uso del Portal</strong><br>
                Esta aplicación proporciona acceso a herramientas de creación de currículums. El usuario asume la responsabilidad del uso del portal y se compromete a hacer un uso adecuado de sus funcionalidades.</p>
                <p><strong>3. Propiedad Intelectual e Industrial</strong><br>
                Todos los derechos reservados. Los diseños, estructura, código (excluyendo librerías de terceros open-source) y recursos son propiedad del responsable de la web.</p>
            `,
            privacy_title: "Política de Privacidad",
            privacy_body: `
                <p><strong>Privacidad desde el Diseño (Client-Side Processing)</strong><br>
                Esta herramienta ha sido desarrollada bajo el principio de máxima privacidad. <strong>No almacenamos, transmitimos, ni procesamos ningún dato personal de los usuarios en servidores externos.</strong></p>
                <p><strong>1. Procesamiento de Datos Personales</strong><br>
                Toda la información ingresada por el usuario (nombres, teléfonos, correos electrónicos, historial laboral y fotografías) es procesada <strong>exclusivamente en el navegador web local</strong> del dispositivo.</p>
                <p><strong>2. Generación del Documento</strong><br>
                La generación del archivo PDF se realiza localmente utilizando librerías de cliente (Javascript). Ningún documento final ni dato intermediario viaja por internet hacia los creadores de esta página ni hacia terceros.</p>
                <p><strong>3. Responsabilidad del Usuario</strong><br>
                Al ser una aplicación 100% del lado del cliente, es responsabilidad exclusiva del usuario proteger la información generada o descargada en su propio dispositivo.</p>
            `,
            storage_title: "Almacenamiento Local y Cookies",
            storage_body: `
                <p><strong>Ausencia de Cookies de Rastreo</strong><br>
                Este sitio web <strong>no utiliza cookies de seguimiento, analítica (como Google Analytics) o publicidad.</strong></p>
                <p><strong>Uso de LocalStorage (Almacenamiento Local)</strong><br>
                Para mejorar la experiencia del usuario y evitar la pérdida de información en caso de que la página se cierre o recargue accidentalmente, utilizamos la memoria de tu navegador (<code>localStorage</code>) con el único fin de:</p>
                <ul>
                    <li>Guardar temporalmente los textos, listas y el progreso de tu currículum.</li>
                    <li>Recordar tus preferencias de diseño, colores y orden de las secciones.</li>
                </ul>
                <p>Estos datos <strong>nunca abandonan tu dispositivo</strong> y puedes eliminarlos en cualquier momento utilizando el botón "Limpiar Datos" dentro de la aplicación, o borrando los datos de navegación de tu navegador.</p>
            `,
            def_profile: "Perfil Profesional",
            def_experience: "Experiencia Laboral",
            def_projects: "Proyectos",
            def_education: "Formación",
            def_skills: "Tecnología",
            def_softskills: "Habilidades",
            def_languages: "Idiomas",
            modal_confirm_title: "¿Confirmar acción?",
            modal_confirm_body: "¿Estás seguro de que deseas limpiar todos los campos del currículum? Se perderá todo el progreso actual y guardado.",
            modal_btn_cancel: "Cancelar",
            modal_btn_confirm: "Sí, limpiar todo"
        },
        en: {
            theme_label: "Theme:",
            structure_label: "Layout:",
            lang_label: "Language:",
            btn_import: "Load Data",
            btn_export: "Save Data",
            btn_sample: "Sample",
            btn_clear: "Clear All",
            btn_print: "Print PDF",
            editor_title: "Data Editor",
            editor_subtitle: "Fill in the fields and watch the real-time preview.",
            sec_personal: "Personal Information",
            sec_profile: "Professional Profile (About me)",
            sec_projects: "Projects",
            sec_experience: "Work Experience",
            sec_education: "Education",
            sec_softskills: "Soft Skills",
            sec_tech: "Technology",
            sec_languages: "Languages",
            btn_add_project: "Add Project",
            btn_add_experience: "Add Experience",
            btn_add_education: "Add Education",
            btn_add_skill: "Add Technology",
            btn_add_language: "Add Language",
            lbl_photo: "Profile Photo (Optional)",
            lbl_fullname: "Full Name",
            lbl_title: "Professional Title / Specialty",
            lbl_email: "Email Address",
            lbl_phone: "Phone Number",
            lbl_link: "Personal Link / Social",
            lbl_linkedin: "LinkedIn (URL or Username)",
            lbl_website: "Personal Website / Portfolio",
            lbl_location: "Location",
            lbl_sec_title: "Section Title",
            lbl_summary: "Brief description of yourself and your goals",
            lbl_softskills_list: "List of Skills",
            ph_fullname: "e.g. John Doe",
            ph_title: "e.g. Marketing Specialist, Project Manager",
            ph_email: "e.g. contact@email.com",
            ph_phone: "e.g. +1 555 000 000",
            ph_link: "e.g. linkedin.com/in/username",
            ph_linkedin: "e.g. linkedin.com/in/your-username",
            ph_website: "e.g. yourwebsite.com",
            ph_location: "e.g. New York, USA",
            ph_sec_profile: "e.g. About me, Summary...",
            ph_summary: "e.g. Professional with experience in team management and process optimization...",
            ph_sec_projects: "e.g. Portfolio, Case Studies...",
            ph_sec_experience: "e.g. Experience, Work History...",
            ph_sec_education: "e.g. Education, Studies...",
            ph_sec_softskills: "e.g. Soft Skills, Competencies...",
            ph_softskills_list: "Write your skills here...",
            ph_sec_tech: "e.g. Technologies, Tools...",
            ph_sec_languages: "e.g. Languages...",
            lbl_exp_role: "Role / Position",
            ph_exp_role: "e.g. Web Developer Intern",
            lbl_exp_company: "Company",
            ph_exp_company: "e.g. Innova Soft Inc.",
            lbl_exp_dates: "Period (Dates)",
            ph_exp_dates: "e.g. Jan 2025 - Mar 2026",
            lbl_exp_desc: "Description / Achievements",
            ph_exp_desc: "e.g. Developed Java APIs, designed responsive views...",
            lbl_proj_name: "Project Name",
            ph_proj_name: "e.g. E-commerce App",
            lbl_proj_tech: "Technologies (Comma separated)",
            ph_proj_tech: "e.g. Flutter, Firebase, Dart",
            lbl_proj_desc: "Description",
            ph_proj_desc: "e.g. Mobile logistics app with local offline database...",
            lbl_edu_degree: "Degree / Certification",
            ph_edu_degree: "e.g. B.S. in Computer Science",
            lbl_edu_school: "School / Institution",
            ph_edu_school: "e.g. Technology Institute",
            lbl_edu_dates: "Period (Dates)",
            ph_edu_dates: "e.g. 2024 - 2026",
            lbl_skill_name: "Skill / Technology",
            ph_skill_name: "e.g. Leadership, React, Excel",
            lbl_lang_name: "Language",
            ph_lang_name: "e.g. English",
            lbl_lang_level: "Level",
            opt_basic: "Basic",
            opt_intermediate: "Intermediate",
            opt_advanced: "Advanced",
            opt_bilingual: "Bilingual",
            opt_native: "Native",
            theme_sapphire: "Sapphire",
            theme_cyberpunk: "Cyberpunk",
            theme_emerald: "Emerald",
            theme_nordic: "Nordic",
            tmpl_modern: "Modern",
            tmpl_minimal: "Minimal",
            tmpl_classic: "Classic",
            tt_toggle_section: "Enable/Disable section",
            tt_drag_move: "Drag to move",
            tt_move_up: "Move up",
            tt_move_down: "Move down",
            tt_remove_photo: "Remove Photo",
            tt_remove_item: "Remove",
            tt_import: "Import CV from JSON file",
            tt_export: "Export CV to JSON file",
            tt_sample: "Load sample data",
            tt_clear: "Clear all",
            tt_print: "Print or save as PDF",
            tt_up: "Up",
            tt_down: "Down",
            footer_legal: "Legal Notice",
            footer_privacy: "Privacy Policy",
            footer_storage: "Local Storage",
            legal_title: "Legal Notice",
            legal_body: `
                <p><strong>1. Identifying Data</strong><br>
                In compliance with the duty of information, you are informed that this website is owned by [YOUR NAME/COMPANY], located at [YOUR ADDRESS], and contact email: [YOUR EMAIL].</p>
                <p><strong>2. Use of the Portal</strong><br>
                This application provides access to resume creation tools. The user assumes responsibility for the use of the portal and undertakes to make appropriate use of its functionalities.</p>
                <p><strong>3. Intellectual and Industrial Property</strong><br>
                All rights reserved. The designs, structure, code (excluding open-source third-party libraries), and resources are the property of the website owner.</p>
            `,
            privacy_title: "Privacy Policy",
            privacy_body: `
                <p><strong>Privacy by Design (Client-Side Processing)</strong><br>
                This tool has been developed under the principle of maximum privacy. <strong>We do not store, transmit, or process any personal data of users on external servers.</strong></p>
                <p><strong>1. Personal Data Processing</strong><br>
                All information entered by the user (names, phones, emails, work history, and photographs) is processed <strong>exclusively in the local web browser</strong> of the device.</p>
                <p><strong>2. Document Generation</strong><br>
                The generation of the PDF file is done locally using client-side libraries (Javascript). No final document or intermediary data travels over the internet to the creators of this page or third parties.</p>
                <p><strong>3. User Responsibility</strong><br>
                Being a 100% client-side application, it is the exclusive responsibility of the user to protect the information generated or downloaded on their own device.</p>
            `,
            storage_title: "Local Storage and Cookies",
            storage_body: `
                <p><strong>No Tracking Cookies</strong><br>
                This website <strong>does not use tracking, analytics (such as Google Analytics), or advertising cookies.</strong></p>
                <p><strong>Use of LocalStorage</strong><br>
                To improve the user experience and prevent the loss of information in case the page is closed or accidentally reloaded, we use your browser's memory (<code>localStorage</code>) for the sole purpose of:</p>
                <ul>
                    <li>Temporarily saving texts, lists, and the progress of your resume.</li>
                    <li>Remembering your design preferences, colors, and section order.</li>
                </ul>
                <p>This data <strong>never leaves your device</strong> and you can delete it at any time using the "Clear Data" button within the application, or by clearing your browser's browsing data.</p>
            `,
            def_profile: "Professional Profile",
            def_experience: "Work Experience",
            def_projects: "Projects",
            def_education: "Education",
            def_skills: "Technology",
            def_softskills: "Skills",
            def_languages: "Languages",
            modal_confirm_title: "Confirm action?",
            modal_confirm_body: "Are you sure you want to clear all resume fields? All current and saved progress will be lost.",
            modal_btn_cancel: "Cancel",
            modal_btn_confirm: "Yes, clear all"
        }
    };

    function updateLanguage(lang) {
        const t = translations[lang];
        if (!t) return;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = t[key];
                } else {
                    el.textContent = t[key];
                }
            }
        });
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (t[key]) {
                el.innerHTML = t[key];
            }
        });
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (t[key]) {
                el.setAttribute('title', t[key]);
            }
        });

        // Translate default section titles if they match previous/current defaults
        const allLangs = Object.keys(translations);
        const inputMap = {
            'input-title-profile': 'def_profile',
            'input-title-experience': 'def_experience',
            'input-title-projects': 'def_projects',
            'input-title-education': 'def_education',
            'input-title-skills': 'def_skills',
            'input-title-softskills': 'def_softskills',
            'input-title-languages': 'def_languages'
        };
        for (const [id, key] of Object.entries(inputMap)) {
            const input = document.getElementById(id);
            if (input) {
                const currentVal = input.value;
                const isDefault = allLangs.some(l => translations[l][key] === currentVal);
                if (isDefault) {
                    input.value = t[key];
                }
            }
        }

        // If sample data is currently active, reload it in the new language
        const inputFullname = document.getElementById('input-fullname');
        if (inputFullname && inputFullname.value === 'Alex Torto Ramos') {
            const btnSampleData = document.getElementById('btn-sample-data');
            if (btnSampleData) {
                // Call it directly to bypass event listeners creating duplicate data if we didn't clear first
                btnSampleData.click();
            }
        }

        updatePreview();
    }

    // DOM Elements - Form Fields
    const inputFullname = document.getElementById('input-fullname');
    const inputTitle = document.getElementById('input-title');
    const inputEmail = document.getElementById('input-email');
    const inputPhone = document.getElementById('input-phone');
    const inputLink = document.getElementById('input-link');
    const inputLinkedin = document.getElementById('input-linkedin');
    const inputWebsite = document.getElementById('input-website');
    const inputLocation = document.getElementById('input-location');
    const inputSummary = document.getElementById('input-summary');

    const skillsList = document.getElementById('skills-list');
    const btnAddSkill = document.getElementById('btn-add-skill');
    const previewSkillsDynamic = document.getElementById('preview-skills-dynamic');
    
    const languagesList = document.getElementById('languages-list');
    const btnAddLanguage = document.getElementById('btn-add-language');
    const previewLanguagesList = document.getElementById('preview-languages-list');

    // Section Titles
    const inputTitleProfile = document.getElementById('input-title-profile');
    const inputTitleExperience = document.getElementById('input-title-experience');
    const inputTitleProjects = document.getElementById('input-title-projects');
    const inputTitleEducation = document.getElementById('input-title-education');
    const inputTitleSkills = document.getElementById('input-title-skills');
    const inputTitleSoftSkills = document.getElementById('input-title-softskills');
    const inputSoftSkillsDesc = document.getElementById('input-softskills-desc');
    const inputTitleLanguages = document.getElementById('input-title-languages');

    const previewTitleProfile = document.querySelector('#preview-title-profile-header span');
    const previewTitleExperience = document.querySelector('#preview-title-experience-header span');
    const previewTitleProjects = document.querySelector('#preview-title-projects-header span');
    const previewTitleEducation = document.querySelector('#preview-title-education-header span');
    const previewTitleSkills = document.querySelector('#preview-title-skills-header span');
    const previewTitleSoftSkills = document.querySelector('#preview-title-softskills-header span');
    const previewSoftSkillsDesc = document.getElementById('preview-softskills-desc');
    const previewTitleLanguages = document.querySelector('#preview-title-languages-header span');

    // Photo Elements
    const inputPhoto = document.getElementById('input-photo');
    const btnRemovePhoto = document.getElementById('btn-remove-photo');
    const previewPhoto = document.getElementById('preview-photo');
    let currentPhoto = null;

    // Dynamic Lists containers in Editor
    const experienceList = document.getElementById('experience-list');
    const projectsList = document.getElementById('projects-list');
    const educationList = document.getElementById('education-list');

    // Action Buttons
    const btnAddExperience = document.getElementById('btn-add-experience');
    const btnAddProject = document.getElementById('btn-add-project');
    const btnAddEducation = document.getElementById('btn-add-education');
    const btnSampleData = document.getElementById('btn-sample-data');
    const btnClearData = document.getElementById('btn-clear-data');
    const btnExportPdf = document.getElementById('btn-export-pdf');
    const btnImportJson = document.getElementById('btn-import-json');
    const btnExportJson = document.getElementById('btn-export-json');
    const inputJsonFile = document.getElementById('input-json-file');

    // Theme Selector Buttons
    const themeButtons = document.querySelectorAll('.theme-btn');

    // Helper to safely trigger Lucide icon creation without breaking execution
    function safeCreateIcons() {
        if (typeof lucide !== 'undefined' && lucide.createIcons) {
            try {
                lucide.createIcons();
            } catch (e) {
                // Fail silently if icons cannot render (e.g., offline)
            }
        }
    }

    // Counter IDs for unique identification
    let expIdCounter = 0;
    let projIdCounter = 0;
    let eduIdCounter = 0;
    let skillIdCounter = 0;
    let langIdCounter = 0;

    // ----------------------------------------------------
    // Dynamic List Management
    // ----------------------------------------------------

    function createDynamicItemContainer(id, innerHtml) {
        return `
            <div class="dynamic-item" id="${id}">
                <div class="item-controls">
                    <button type="button" class="btn-item-control btn-move-up" data-i18n-title="tt_up" title="Subir"><i data-lucide="arrow-up"></i></button>
                    <button type="button" class="btn-item-control btn-move-down" data-i18n-title="tt_down" title="Bajar"><i data-lucide="arrow-down"></i></button>
                    <button type="button" class="btn-item-control btn-remove-item" data-i18n-title="tt_remove_item" title="Eliminar"><i data-lucide="x"></i></button>
                </div>
                ${innerHtml}
            </div>
        `;
    }

    function appendDynamicField(listElement, id, innerHtml) {
        if (!listElement) return;
        listElement.insertAdjacentHTML('beforeend', createDynamicItemContainer(id, innerHtml));
        setupItemListeners(id);
        safeCreateIcons();
        updatePreview();
    }

    // Add Work Experience Form Group
    function addExperienceField(data = {}) {
        const id = `exp-${expIdCounter++}`;
        const innerHtml = `
                <div class="form-group grid-2">
                    <label data-i18n="lbl_exp_role">Puesto / Cargo</label>
                    <input type="text" class="exp-role" data-i18n="ph_exp_role" value="${data.role || ''}" placeholder="Ej. Desarrollador Web Prácticas">
                </div>
                <div class="form-group">
                    <label data-i18n="lbl_exp_company">Empresa</label>
                    <input type="text" class="exp-company" data-i18n="ph_exp_company" value="${data.company || ''}" placeholder="Ej. Innova Soft S.L.">
                </div>
                <div class="form-group">
                    <label data-i18n="lbl_exp_dates">Periodo (Fechas)</label>
                    <input type="text" class="exp-dates" data-i18n="ph_exp_dates" value="${data.dates || ''}" placeholder="Ej. Ene 2025 - Mar 2026">
                </div>
                <div class="form-group">
                    <label data-i18n="lbl_exp_desc">Descripción / Logros</label>
                    <textarea class="exp-desc bullet-textarea" data-i18n="ph_exp_desc" rows="3" placeholder="Ej. Desarrollo de APIs en Java, diseño de vistas responsivas...">${data.desc || ''}</textarea>
                </div>
        `;
        appendDynamicField(experienceList, id, innerHtml);
        updateLanguage(localStorage.getItem('procv_lang') || 'es');
    }

    // Add Project Form Group
    function addProjectField(data = {}) {
        const id = `proj-${projIdCounter++}`;
        const innerHtml = `
                <div class="form-group">
                    <label data-i18n="lbl_proj_name">Nombre del Proyecto</label>
                    <input type="text" class="proj-title" data-i18n="ph_proj_name" value="${data.title || ''}" placeholder="Ej. E-commerce App">
                </div>
                <div class="form-group">
                    <label data-i18n="lbl_proj_tech">Tecnologías (Separadas por comas)</label>
                    <input type="text" class="proj-tech" data-i18n="ph_proj_tech" value="${data.tech || ''}" placeholder="Ej. Flutter, Firebase, Dart">
                </div>
                <div class="form-group">
                    <label data-i18n="lbl_proj_desc">Descripción</label>
                    <textarea class="proj-desc" rows="2" data-i18n="ph_proj_desc" placeholder="Ej. Aplicación móvil de gestión logística con base de datos local y offline...">${data.desc || ''}</textarea>
                </div>
        `;
        appendDynamicField(projectsList, id, innerHtml);
        updateLanguage(localStorage.getItem('procv_lang') || 'es');
    }

    // Add Education Form Group
    function addEducationField(data = {}) {
        const id = `edu-${eduIdCounter++}`;
        const innerHtml = `
                <div class="form-group">
                    <label data-i18n="lbl_edu_degree">Titulación / Grado / Certificación</label>
                    <input type="text" class="edu-degree" data-i18n="ph_edu_degree" value="${data.degree || ''}" placeholder="Ej. C.F.G.S. Desarrollo de Aplicaciones Web">
                </div>
                <div class="form-group">
                    <label data-i18n="lbl_edu_school">Centro de Estudios / Institución</label>
                    <input type="text" class="edu-school" data-i18n="ph_edu_school" value="${data.school || ''}" placeholder="Ej. I.E.S. Tecnológico">
                </div>
                <div class="form-group">
                    <label data-i18n="lbl_edu_dates">Periodo (Fechas)</label>
                    <input type="text" class="edu-dates" data-i18n="ph_edu_dates" value="${data.dates || ''}" placeholder="Ej. 2024 - 2026">
                </div>
        `;
        appendDynamicField(educationList, id, innerHtml);
        updateLanguage(localStorage.getItem('procv_lang') || 'es');
    }

    // Add Skill Form Group
    function addSkillField(name = '', level = '4') {
        const id = `skill-${skillIdCounter++}`;
        const innerHtml = `
                <div class="form-group">
                    <label data-i18n="lbl_skill_name">Habilidad / Tecnología</label>
                    <input type="text" class="skill-name" data-i18n="ph_skill_name" value="${name}" placeholder="Ej. Liderazgo, React, Excel">
                </div>
                <input type="hidden" class="skill-level" value="${level}">
        `;
        appendDynamicField(skillsList, id, innerHtml);
        updateLanguage(localStorage.getItem('procv_lang') || 'es');
    }

    // Add Language Form Group
    function addLanguageField(name = '', level = 'Básico') {
        const id = `lang-${langIdCounter++}`;
        const innerHtml = `
                <div class="form-group grid-2">
                    <div>
                        <label data-i18n="lbl_lang_name">Idioma</label>
                        <input type="text" class="lang-name" data-i18n="ph_lang_name" value="${name}" placeholder="Ej. Inglés">
                    </div>
                    <div>
                        <label data-i18n="lbl_lang_level">Nivel</label>
                        <select class="lang-level">
                            <option value="Básico" data-i18n="opt_basic" ${level === 'Básico' ? 'selected' : ''}>Básico</option>
                            <option value="Intermedio" data-i18n="opt_intermediate" ${level === 'Intermedio' ? 'selected' : ''}>Intermedio</option>
                            <option value="Avanzado" data-i18n="opt_advanced" ${level === 'Avanzado' ? 'selected' : ''}>Avanzado</option>
                            <option value="Bilingüe" data-i18n="opt_bilingual" ${level === 'Bilingüe' ? 'selected' : ''}>Bilingüe</option>
                            <option value="Nativo" data-i18n="opt_native" ${level === 'Nativo' ? 'selected' : ''}>Nativo</option>
                        </select>
                    </div>
                </div>
        `;
        appendDynamicField(languagesList, id, innerHtml);
        updateLanguage(localStorage.getItem('procv_lang') || 'es');
    }

    // Setup input and delete event listeners for a dynamic item
    function setupItemListeners(itemId) {
        const item = document.getElementById(itemId);
        
        // Listen to change inputs
        const inputs = item.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('input', updatePreview);
        });

        // Listen to delete button
        const deleteBtn = item.querySelector('.btn-remove-item');
        deleteBtn.addEventListener('click', () => {
            item.classList.add('removing');
            // Wait for potential CSS animations before deleting
            setTimeout(() => {
                item.remove();
                updatePreview();
            }, 150);
        });

        // Listen to move up button
        const moveUpBtn = item.querySelector('.btn-move-up');
        moveUpBtn.addEventListener('click', () => {
            const prev = item.previousElementSibling;
            if (prev) {
                item.parentNode.insertBefore(item, prev);
                updatePreview();
            }
        });

        // Listen to move down button
        const moveDownBtn = item.querySelector('.btn-move-down');
        moveDownBtn.addEventListener('click', () => {
            const next = item.nextElementSibling;
            if (next) {
                item.parentNode.insertBefore(next, item);
                updatePreview();
            }
        });
    }

    // ----------------------------------------------------
    // Photo Upload Logic
    // ----------------------------------------------------
    if (inputPhoto) {
        inputPhoto.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onerror = function (err) {
                    alert('Error al intentar leer la imagen.');
                };
                reader.onload = function(event) {
                    currentPhoto = event.target.result;
                    updatePreview();
                    saveToLocalStorage();
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (btnRemovePhoto) {
        btnRemovePhoto.addEventListener('click', () => {
            currentPhoto = null;
            inputPhoto.value = '';
            updatePreview();
            saveToLocalStorage();
        });
    }

    // ----------------------------------------------------
    // Update Preview Logic
    // ----------------------------------------------------

    function updatePhotoPreview() {
        if (currentPhoto) {
            previewPhoto.src = currentPhoto;
            previewPhoto.style.display = 'block';
            if(btnRemovePhoto) btnRemovePhoto.style.display = 'inline-flex';
        } else {
            previewPhoto.src = '';
            previewPhoto.style.display = 'none';
            if(btnRemovePhoto) btnRemovePhoto.style.display = 'none';
            if(inputPhoto) inputPhoto.value = '';
        }
    }

    function updateSectionTitlesPreview() {
        if(previewTitleProfile) previewTitleProfile.textContent = inputTitleProfile.value || 'Perfil Profesional';
        if(previewTitleExperience) previewTitleExperience.textContent = inputTitleExperience.value || 'Experiencia Laboral';
        if(previewTitleProjects) previewTitleProjects.textContent = inputTitleProjects.value || 'Proyectos';
        if(previewTitleEducation) previewTitleEducation.textContent = inputTitleEducation.value || 'Formación';
        if(previewTitleSkills) previewTitleSkills.textContent = inputTitleSkills.value || 'Tecnología';
        if(previewTitleSoftSkills) previewTitleSoftSkills.textContent = inputTitleSoftSkills.value || 'Habilidades';
        if(previewTitleLanguages) previewTitleLanguages.textContent = inputTitleLanguages.value || 'Idiomas';
    }

    function updateTextAndContactPreview() {
        const currentLang = localStorage.getItem('procv_lang') || 'es';
        const t = translations[currentLang] || translations['es'];

        // 1. Personal Info
        let nameToDisplay = inputFullname.value.trim();
        const nameWords = nameToDisplay.split(/\s+/);
        if (nameWords.length > 2) {
            nameToDisplay = nameWords[0] + ' ' + nameWords[1] + '\n' + nameWords.slice(2).join(' ');
        }
        setText('preview-fullname', nameToDisplay, t.lbl_fullname);
        setText('preview-title', inputTitle.value, t.lbl_title);
        setText('preview-summary', inputSummary.value, t.lbl_summary + '...');

        // 2. Contacts
        setContact('preview-email', 'cv-contact-email-container', inputEmail.value, 'email');
        setContact('preview-phone', 'cv-contact-phone-container', inputPhone.value, 'phone');
        setContact('preview-location', 'cv-contact-location-container', inputLocation.value, 'text');
        setContact('preview-website', 'cv-contact-website-container', inputWebsite.value, 'url');
        setContact('preview-link', 'cv-contact-link-container', inputLink.value, 'url');
        setContact('preview-linkedin', 'cv-contact-linkedin-container', inputLinkedin.value, 'url');
    }

    function buildExperienceHtml(role, company, dates, desc) {
        const currentLang = localStorage.getItem('procv_lang') || 'es';
        const t = translations[currentLang] || translations['es'];
        return `
            <div class="cv-item-block">
                <div class="cv-item-header">
                    <div class="cv-item-title">${role || t.lbl_exp_role}</div>
                    <div class="cv-item-meta">${company || t.lbl_exp_company}</div>
                </div>
                <div class="cv-item-dates">${dates || ''}</div>
                ${desc ? `<div class="cv-item-desc">${desc.replace(/\n/g, '<br>')}</div>` : ''}
            </div>
        `;
    }

    function buildProjectHtml(title, techString, desc) {
        const techBadges = techString.split(',')
            .map(t => t.trim())
            .filter(t => t !== '')
            .map(t => `<span class="cv-badge-tech">${t}</span>`)
            .join('');

        return `
            <div class="cv-item-block">
                <div class="cv-item-header">
                    <div class="cv-item-title">${title}</div>
                </div>
                ${desc ? `<div class="cv-item-desc">${desc.replace(/\n/g, '<br>')}</div>` : ''}
                ${techBadges ? `<div class="cv-item-tech">${techBadges}</div>` : ''}
            </div>
        `;
    }

    function buildEducationHtml(degree, school, dates) {
        const currentLang = localStorage.getItem('procv_lang') || 'es';
        const t = translations[currentLang] || translations['es'];
        return `
            <div class="cv-item-block">
                <div class="cv-item-title">${degree || t.lbl_edu_degree}</div>
                <div class="cv-item-meta">${school || t.lbl_edu_school}</div>
                <div class="cv-item-dates">${dates || ''}</div>
            </div>
        `;
    }

    function updateExperiencePreview() {
        const experienceContainer = document.getElementById('preview-experience');
        const expItems = experienceList.querySelectorAll('.dynamic-item');
        const expSection = document.getElementById('cv-section-experience');
        
        if (expItems.length === 0) {
            expSection.style.display = 'none';
        } else {
            expSection.style.display = 'flex';
            experienceContainer.innerHTML = '';
            expItems.forEach(item => {
                const role = item.querySelector('.exp-role').value;
                const company = item.querySelector('.exp-company').value;
                const dates = item.querySelector('.exp-dates').value;
                const desc = item.querySelector('.exp-desc').value;

                if (role || company) {
                    experienceContainer.insertAdjacentHTML('beforeend', buildExperienceHtml(role, company, dates, desc));
                }
            });
        }
    }

    function updateProjectsPreview() {
        const projectsContainer = document.getElementById('preview-projects');
        const projItems = projectsList.querySelectorAll('.dynamic-item');
        const projSection = document.getElementById('cv-section-projects');

        if (projItems.length === 0) {
            projSection.style.display = 'none';
        } else {
            projSection.style.display = 'flex';
            projectsContainer.innerHTML = '';
            projItems.forEach(item => {
                const title = item.querySelector('.proj-title').value;
                const techString = item.querySelector('.proj-tech').value;
                const desc = item.querySelector('.proj-desc').value;

                if (title) {
                    projectsContainer.insertAdjacentHTML('beforeend', buildProjectHtml(title, techString, desc));
                }
            });
        }
    }

    function updateEducationPreview() {
        const educationContainer = document.getElementById('preview-education');
        const eduItems = educationList.querySelectorAll('.dynamic-item');
        const eduSection = document.getElementById('cv-section-education');

        if (eduItems.length === 0) {
            eduSection.style.display = 'none';
        } else {
            eduSection.style.display = 'flex';
            educationContainer.innerHTML = '';
            eduItems.forEach(item => {
                const degree = item.querySelector('.edu-degree').value;
                const school = item.querySelector('.edu-school').value;
                const dates = item.querySelector('.edu-dates').value;

                if (degree || school) {
                    educationContainer.insertAdjacentHTML('beforeend', buildEducationHtml(degree, school, dates));
                }
            });
        }
    }

    function updateSkillsPreview() {
        const skillsItems = skillsList.querySelectorAll('.dynamic-item');
        const skillsSection = document.getElementById('cv-section-skills');
        
        if (skillsItems.length === 0) {
            skillsSection.style.display = 'none';
        } else {
            skillsSection.style.display = 'flex';
            if (previewSkillsDynamic) {
                previewSkillsDynamic.innerHTML = '';
                const tagsContainer = document.createElement('div');
                tagsContainer.className = 'cv-tags';
                
                skillsItems.forEach(item => {
                    const name = item.querySelector('.skill-name').value;
                    
                    if (name) {
                        const skillHtml = `<span class="cv-tag">${name}</span>`;
                        tagsContainer.insertAdjacentHTML('beforeend', skillHtml);
                    }
                });
                previewSkillsDynamic.appendChild(tagsContainer);
            }
        }
    }

    function updateSoftSkillsPreview() {
        const text = inputSoftSkillsDesc.value;
        const softSkillsSection = document.getElementById('cv-section-softskills');
        if (text.trim() === '') {
            softSkillsSection.style.display = 'none';
        } else {
            softSkillsSection.style.display = 'flex';
            if(previewSoftSkillsDesc) {
                previewSoftSkillsDesc.textContent = text;
            }
        }
    }

    function updateLanguagesPreview() {
        if (previewLanguagesList) {
            previewLanguagesList.innerHTML = '';
            let hasLangs = false;
            
            const langItems = document.querySelectorAll('#languages-list .dynamic-item');
            langItems.forEach(item => {
                const name = item.querySelector('.lang-name').value.trim();
                const level = item.querySelector('.lang-level').value.trim();

                if (name) {
                    hasLangs = true;
                    const langDiv = document.createElement('div');
                    langDiv.style.marginBottom = '5px';
                    langDiv.innerHTML = `<strong>${name}:</strong> ${level}`;
                    previewLanguagesList.appendChild(langDiv);
                }
            });

            const langSection = document.getElementById('cv-section-languages');
            if (langSection) {
                if (!hasLangs && langItems.length === 0) {
                    langSection.style.display = 'none';
                } else {
                    langSection.style.display = 'block';
                }
            }
        }
    }

    function updatePreview() {
        updatePhotoPreview();
        updateSectionTitlesPreview();
        updateTextAndContactPreview();
        updateExperiencePreview();
        updateProjectsPreview();
        updateEducationPreview();
        updateSkillsPreview();
        updateSoftSkillsPreview();
        updateLanguagesPreview();
        updateDynamicControlsState();
        saveToLocalStorage();
    }

    // Disables Move Up for the first item and Move Down for the last item
    function updateDynamicControlsState() {
        document.querySelectorAll('.dynamic-list').forEach(list => {
            const items = list.querySelectorAll('.dynamic-item');
            items.forEach((item, index) => {
                const upBtn = item.querySelector('.btn-move-up');
                const downBtn = item.querySelector('.btn-move-down');
                if (upBtn) upBtn.disabled = (index === 0);
                if (downBtn) downBtn.disabled = (index === items.length - 1);
            });
        });
    }

    // Helper functions for updating UI
    function setText(id, value, fallback) {
        document.getElementById(id).textContent = value.trim() !== '' ? value : fallback;
    }

    function setContact(id, containerId, value, type = 'text') {
        const container = document.getElementById(containerId);
        if (value.trim() === '') {
            container.style.display = 'none';
        } else {
            container.style.display = 'flex';
            const el = document.getElementById(id);
            el.textContent = value;
            if (el.tagName === 'A') {
                if (type === 'email') {
                    el.href = 'mailto:' + value.trim();
                } else if (type === 'phone') {
                    el.href = 'tel:' + value.trim().replace(/\s+/g, '');
                } else if (type === 'url') {
                    let url = value.trim();
                    if (!url.startsWith('http://') && !url.startsWith('https://')) {
                        url = 'https://' + url;
                    }
                    el.href = url;
                }
            }
        }
    }



    // Bind static form fields to input events
    [
        inputFullname, inputTitle, inputEmail, inputPhone, inputLink,
        inputLinkedin, inputWebsite, inputLocation, inputSummary,
        inputTitleProfile, inputTitleExperience, inputTitleProjects, inputTitleEducation, inputTitleSkills, inputTitleSoftSkills, inputSoftSkillsDesc, inputTitleLanguages
    ].forEach(element => {
        element.addEventListener('input', updatePreview);
    });

    // ----------------------------------------------------
    // Dynamic List Button Actions
    // ----------------------------------------------------
    btnAddExperience.addEventListener('click', () => addExperienceField());
    btnAddProject.addEventListener('click', () => addProjectField());
    btnAddEducation.addEventListener('click', () => addEducationField());
    if(btnAddSkill) {
        btnAddSkill.addEventListener('click', () => {
            addSkillField();
        });
    }

    if(btnAddLanguage) {
        btnAddLanguage.addEventListener('click', () => {
            addLanguageField();
        });
    }

    // ----------------------------------------------------
    // Dropdowns Logic (Theme, Template, Language)
    // ----------------------------------------------------
    const dropdownContainers = document.querySelectorAll('.custom-dropdown');

    // Generic Dropdown Toggle
    dropdownContainers.forEach(container => {
        const header = container.querySelector('.dropdown-header');
        if (header) {
            header.addEventListener('click', (e) => {
                e.stopPropagation();
                // Close others
                dropdownContainers.forEach(c => {
                    if (c !== container) c.classList.remove('open');
                });
                container.classList.toggle('open');
            });
        }
    });

    document.addEventListener('click', () => {
        dropdownContainers.forEach(c => c.classList.remove('open'));
    });

    // Theme Switcher Logic
    const themeDropdownMenu = document.getElementById('theme-dropdown-menu');
    const themeSelectedIcon = document.getElementById('theme-selected-icon');
    if (themeDropdownMenu && themeSelectedIcon) {
        const themeItems = themeDropdownMenu.querySelectorAll('.dropdown-item');
        themeItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const theme = item.getAttribute('data-theme');
                
                themeItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                
                // Update header icon
                themeSelectedIcon.className = `theme-btn btn-${theme} active`;
                
                // Close dropdown
                item.closest('.custom-dropdown').classList.remove('open');
                
                // Apply theme
                document.body.className = Array.from(document.body.classList)
                    .filter(c => !c.startsWith('theme-'))
                    .join(' ');
                document.body.classList.add(`theme-${theme}`);
                saveToLocalStorage();
            });
        });
    }

    // Template Switcher Logic
    const templateDropdownMenu = document.getElementById('template-dropdown-menu');
    const templateSelectedText = document.getElementById('template-selected-text');
    if (templateDropdownMenu && templateSelectedText) {
        const templateItems = templateDropdownMenu.querySelectorAll('.dropdown-item');
        templateItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const template = item.getAttribute('data-template');
                
                templateItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                
                // Update header icon
                const iconElement = item.querySelector('i');
                if (iconElement) {
                    templateSelectedText.innerHTML = iconElement.outerHTML;
                    // Re-initialize lucide icons for the new injected HTML
                    if (window.lucide) {
                        lucide.createIcons({
                            nameAttr: 'data-lucide',
                            root: templateSelectedText
                        });
                    }
                }
                
                // Close dropdown
                item.closest('.custom-dropdown').classList.remove('open');
                
                // Apply template
                document.body.className = Array.from(document.body.classList)
                    .filter(c => !c.startsWith('template-'))
                    .join(' ');
                document.body.classList.add(`template-${template}`);
                saveToLocalStorage();
            });
        });
    }

    // Language Switcher Logic
    const langDropdownMenu = document.getElementById('lang-dropdown-menu');
    const langSelectedText = document.getElementById('lang-selected-text');
    if (langDropdownMenu && langSelectedText) {
        const langItems = langDropdownMenu.querySelectorAll('.dropdown-item');
        langItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = item.getAttribute('data-lang');
                
                langItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                
                langSelectedText.textContent = item.textContent;
                item.closest('.custom-dropdown').classList.remove('open');
                
                // Save and apply lang
                localStorage.setItem('procv_lang', lang);
                updateLanguage(lang);
            });
        });
    }

    // ----------------------------------------------------
    // Section Reordering
    // ----------------------------------------------------
    function moveSection(btn, direction) {
        const item = btn.closest('.accordion-item');
        if (!item) return;
        
        if (direction === 'up' && item.previousElementSibling && item.previousElementSibling.classList.contains('accordion-item')) {
            if (!item.previousElementSibling.hasAttribute('data-fixed')) {
                item.parentNode.insertBefore(item, item.previousElementSibling);
            }
        } else if (direction === 'down' && item.nextElementSibling && item.nextElementSibling.classList.contains('accordion-item')) {
            item.parentNode.insertBefore(item.nextElementSibling, item);
        }
        
        updatePreviewSectionOrder();
        saveToLocalStorage();
    }

    document.querySelectorAll('.btn-section-up').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            moveSection(btn, 'up');
        });
    });

    document.querySelectorAll('.btn-section-down').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            moveSection(btn, 'down');
        });
    });

    // ----------------------------------------------------
    // Drag and Drop Reordering (SortableJS)
    // ----------------------------------------------------
    const accordionContainer = document.querySelector('.editor-accordion');
    if (typeof Sortable !== 'undefined' && accordionContainer) {
        new Sortable(accordionContainer, {
            animation: 150,
            handle: '.accordion-trigger', // Allows dragging from anywhere on the header
            filter: '[data-fixed="true"] .accordion-trigger, input, textarea, select, button, .section-toggle', // Prevent dragging fixed items and inputs
            preventOnFilter: false,
            onMove: function (evt) {
                // Prevent dropping above or below fixed items
                return !evt.related.hasAttribute('data-fixed');
            },
            onEnd: function (evt) {
                // Prevent accordion from toggling open/close right after drag
                const trigger = evt.item.querySelector('.accordion-trigger');
                if (trigger) {
                    const preventClick = function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        trigger.removeEventListener('click', preventClick, true);
                    };
                    trigger.addEventListener('click', preventClick, true);
                    setTimeout(() => trigger.removeEventListener('click', preventClick, true), 100);
                }
                
                updatePreviewSectionOrder();
                saveToLocalStorage();
            }
        });
        
        // Add grab cursor to all triggers that are not fixed
        document.querySelectorAll('.accordion-item:not([data-fixed="true"]) .accordion-trigger').forEach(trigger => {
            trigger.style.cursor = 'grab';
        });
    }

    function updatePreviewSectionOrder() {
        // Get ordered section IDs from the editor
        const orderedIds = Array.from(document.querySelectorAll('.section-toggle'))
            .map(toggle => toggle.getAttribute('data-section'))
            .filter(id => id);

        // Use Flexbox order to sort items globally or within columns
        const allSections = document.querySelectorAll('#cv-preview-sheet .cv-section');
        allSections.forEach(sec => {
            const idx = orderedIds.indexOf(sec.id);
            if (idx !== -1) {
                sec.style.order = idx;
            } else {
                sec.style.order = 99;
            }
        });
    }

    function resetSectionOrderToDefault() {
        const defaultOrder = [
            'cv-section-summary',
            'cv-section-projects',
            'cv-section-experience',
            'cv-section-education',
            'cv-section-softskills',
            'cv-section-skills',
            'cv-section-languages'
        ];
        defaultOrder.forEach(sectionId => {
            const toggle = document.querySelector(`.section-toggle[data-section="${sectionId}"]`);
            if (toggle) {
                const item = toggle.closest('.accordion-item');
                if (item && item.parentNode) {
                    item.parentNode.appendChild(item);
                }
            }
        });
        updatePreviewSectionOrder();
        localStorage.removeItem('procv-section-order');
    }

    // ----------------------------------------------------
    // Load Sample Data (For Multiplatform Developer Student)
    // ----------------------------------------------------
    btnSampleData.addEventListener('click', () => {
        // Reset and enable all toggles
        document.querySelectorAll('.section-toggle').forEach(toggle => {
            toggle.checked = true;
            const sectionId = toggle.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            const accordionItem = toggle.closest('.accordion-item');
            if (targetSection) targetSection.classList.remove('hidden-section');
            if (accordionItem) accordionItem.classList.remove('section-disabled');
        });

        resetSectionOrderToDefault();

        const currentLang = localStorage.getItem('procv_lang') || 'es';
        if (currentLang === 'en') {
            inputFullname.value = 'Alex Torto Ramos';
            inputTitle.value = 'Project Manager // Strategic Consultant';
            inputEmail.value = 'alextorto@email.com';
            inputPhone.value = '+1 234 567 890';
            inputLocation.value = 'New York, USA';
            inputWebsite.value = 'alextorto.com';
            inputLink.value = 'linkedin.com/in/alextorto';
            inputLinkedin.value = 'linkedin.com/in/alextorto';
            inputSummary.value = 'Proactive professional with over 5 years of experience leading multidisciplinary teams and optimizing operational processes. Passionate about continuous improvement, data analytics, and agile project management. Focused on maximizing efficiency and achieving organizational goals sustainably.';
            
            inputTitleProfile.value = 'Professional Profile';
            inputTitleExperience.value = 'Work Experience';
            inputTitleProjects.value = 'Projects';
            inputTitleEducation.value = 'Education';
            inputTitleSkills.value = 'Technology';
            inputTitleSoftSkills.value = 'Skills';
            inputSoftSkillsDesc.value = '• Agile project management (Scrum, Kanban)\n• Multidisciplinary team leadership\n• Effective communication and negotiation\n• Problem-solving and critical thinking';
            inputTitleLanguages.value = 'Languages';

            // Clear dynamic lists first
            experienceList.innerHTML = '';
            projectsList.innerHTML = '';
            educationList.innerHTML = '';
            if(skillsList) skillsList.innerHTML = '';
            if(languagesList) languagesList.innerHTML = '';

            // Load Sample Dynamic Data
            addLanguageField('Spanish', 'Native');
            addLanguageField('English', 'Advanced');
            addLanguageField('French', 'Intermediate');
            
            addSkillField('Agile Management', '5');
            addSkillField('Leadership', '4');
            addSkillField('Advanced Microsoft Excel', '5');
            addSkillField('Negotiation', '4');
            addSkillField('Python', '3');
            
            addExperienceField({
                role: 'Senior Project Manager',
                company: 'Global Innovation Inc.',
                dates: 'Mar 2021 - Present',
                desc: '• Led a 15-person team to implement new operational processes.\n• Reduced operational costs by 20% in the first year.\n• Planned and executed annual budgets and KPI reporting.'
            });
            addExperienceField({
                role: 'Junior Consultant',
                company: 'Business Strategies LLC',
                dates: 'Jun 2018 - Feb 2021',
                desc: '• Conducted market analysis and prepared reports for key retail clients.\n• Assisted in restructuring financial departments.\n• Optimized internal company databases.'
            });
            addExperienceField({
                role: 'Marketing Assistant',
                company: 'Creative Marketing 360',
                dates: 'Jan 2016 - May 2018',
                desc: '• Coordinated social media advertising campaigns.\n• Analyzed performance metrics and follower growth.\n• Collaborated with the design team to create promotional material.'
            });
            addExperienceField({
                role: 'Data Analyst',
                company: 'DataTech Solutions',
                dates: 'Aug 2014 - Dec 2015',
                desc: '• Cleaned and structured client databases.\n• Developed interactive dashboards in Power BI.\n• Presented insights to executive management.'
            });
            addExperienceField({
                role: 'Sales Executive',
                company: 'National Trading Co.',
                dates: 'Mar 2012 - Jul 2014',
                desc: '• Managed a portfolio of over 50 corporate clients.\n• Closed negotiations and met quarterly sales targets.\n• Expanded sales territory by 15%.'
            });
            addExperienceField({
                role: 'Administration Intern',
                company: 'XYZ Construction Co.',
                dates: 'Sep 2011 - Feb 2012',
                desc: '• Assisted in human resources and recruitment processes.\n• Organized physical and digital files.\n• Supported basic accounting and billing tasks.'
            });

            // Add Projects
            addProjectField({
                title: 'Departmental Digital Transformation',
                tech: 'Change Management, ERP, Training',
                desc: 'Designed and executed the digital transformation strategy for the sales department, achieving 95% adoption of the new CRM system within 3 months.'
            });
            addProjectField({
                title: 'Supply Chain Optimization',
                tech: 'Data Analysis, Logistics, Negotiation',
                desc: 'Logistics restructuring project resulting in a 15% reduction in delivery times and increased overall customer satisfaction.'
            });

            // Add Education
            addEducationField({
                degree: 'Master of Business Administration (MBA)',
                school: 'University of Barcelona',
                dates: '2016 - 2018'
            });
            addEducationField({
                degree: 'A.A.S. in Computer Systems and Networks',
                school: 'Metropolitan Technical College',
                dates: '2022 - 2024'
            });
        } else {
            // Load Text fields
            inputFullname.value = 'Alex Torto Ramos';
            inputTitle.value = 'Director de Proyectos // Consultor Estratégico';
            inputEmail.value = 'alextorto@correo.com';
            inputPhone.value = '+34 612 345 678';
            inputLocation.value = 'Barcelona, España';
            inputWebsite.value = 'alextorto.com';
            inputLink.value = 'linkedin.com/in/alextorto';
            inputLinkedin.value = 'linkedin.com/in/alextorto';
            inputSummary.value = 'Profesional proactivo con más de 5 años de experiencia liderando equipos multidisciplinares y optimizando procesos operativos. Apasionado por la mejora continua, la analítica de datos y la gestión ágil de proyectos. Enfocado en maximizar la eficiencia y alcanzar los objetivos organizacionales de manera sostenible.';
            
            inputTitleProfile.value = 'Perfil Profesional';
            inputTitleExperience.value = 'Experiencia Laboral';
            inputTitleProjects.value = 'Proyectos';
            inputTitleEducation.value = 'Formación';
            inputTitleSkills.value = 'Tecnología';
            inputTitleSoftSkills.value = 'Habilidades';
            inputSoftSkillsDesc.value = '• Gestión ágil de proyectos (Scrum, Kanban)\n• Liderazgo de equipos multidisciplinares\n• Comunicación efectiva y negociación\n• Resolución de problemas y pensamiento crítico';
            inputTitleLanguages.value = 'Idiomas';

            // Clear dynamic lists first
            experienceList.innerHTML = '';
            projectsList.innerHTML = '';
            educationList.innerHTML = '';
            if(skillsList) skillsList.innerHTML = '';
            if(languagesList) languagesList.innerHTML = '';

            // Load Sample Dynamic Data
            addLanguageField('Español', 'Nativo');
            addLanguageField('Inglés', 'Avanzado');
            addLanguageField('Francés', 'Intermedio');
            
            addSkillField('Gestión Ágil', '5');
            addSkillField('Liderazgo', '4');
            addSkillField('Microsoft Excel Avanzado', '5');
            addSkillField('Negociación', '4');
            addSkillField('Python', '3');
            addExperienceField({
                role: 'Gestor de Proyectos Senior',
                company: 'Innovación Global S.A.',
                dates: 'Mar 2021 - Present',
                desc: '• Liderazgo de un equipo de 15 personas para la implementación de nuevos procesos operativos.\n• Reducción de costes operativos en un 20% durante el primer año.\n• Planificación y ejecución de presupuestos anuales y reporte de KPIs.'
            });
            addExperienceField({
                role: 'Consultor Junior',
                company: 'Estrategias Empresariales LLC',
                dates: 'Jun 2018 - Feb 2021',
                desc: '• Análisis de mercado y elaboración de informes para clientes clave del sector retail.\n• Asistencia en la reestructuración de departamentos financieros.\n• Optimización de bases de datos internas de la compañía.'
            });
            addExperienceField({
                role: 'Asistente de Marketing',
                company: 'Marketing Creativo 360',
                dates: 'Ene 2016 - May 2018',
                desc: '• Coordinación de campañas publicitarias en redes sociales.\n• Análisis de métricas de rendimiento y crecimiento de seguidores.\n• Colaboración con el equipo de diseño para crear material promocional.'
            });
            addExperienceField({
                role: 'Analista de Datos',
                company: 'DataTech Solutions',
                dates: 'Ago 2014 - Dic 2015',
                desc: '• Limpieza y estructuración de bases de datos de clientes.\n• Desarrollo de tableros de control interactivos en Power BI.\n• Presentación de insights a la gerencia ejecutiva.'
            });
            addExperienceField({
                role: 'Ejecutivo de Ventas',
                company: 'Comercializadora Nacional',
                dates: 'Mar 2012 - Jul 2014',
                desc: '• Manejo de una cartera de más de 50 clientes corporativos.\n• Cierre de negociaciones y cumplimiento de metas de ventas trimestrales.\n• Expansión del territorio de ventas en un 15%.'
            });
            addExperienceField({
                role: 'Pasante de Administración',
                company: 'Empresa Constructora XYZ',
                dates: 'Sep 2011 - Feb 2012',
                desc: '• Asistencia en procesos de recursos humanos y reclutamiento.\n• Organización de archivos físicos y digitales.\n• Soporte en tareas de contabilidad básica y facturación.'
            });

            // Add Projects
            addProjectField({
                title: 'Transformación Digital Departamental',
                tech: 'Gestión del Cambio, ERP, Formación',
                desc: 'Diseño y ejecución de la estrategia de transformación digital para el departamento de ventas, logrando una adopción del 95% del nuevo sistema CRM en un periodo de 3 meses.'
            });
            addProjectField({
                title: 'Optimización de Cadena de Suministro',
                tech: 'Análisis de Datos, Logística, Negociación',
                desc: 'Proyecto de reestructuración logística que resultó en la reducción de tiempos de entrega en un 15% y aumento de la satisfacción general del cliente.'
            });

            // Add Education
            addEducationField({
                degree: 'Máster en Dirección de Empresas (MBA)',
                school: 'Universidad de Barcelona',
                dates: '2016 - 2018'
            });
            addEducationField({
                degree: 'C.F.G.M. en Sistemas Microinformáticos y Redes (SMR)',
                school: 'Colegio Técnico Metropolitano',
                dates: '2022 - 2024'
            });
        }

        currentPhoto = null;
        if(inputPhoto) inputPhoto.value = '';

        updatePreview();
    });

    // ----------------------------------------------------
    // Clear Form Data (Custom Modal Triggered)
    // ----------------------------------------------------
    const confirmModal = document.getElementById('confirm-modal');
    const modalBtnCancel = document.getElementById('modal-btn-cancel');
    const modalBtnConfirm = document.getElementById('modal-btn-confirm');

    // Show modal
    btnClearData.addEventListener('click', () => {
        confirmModal.classList.add('active');
    });

    // Hide modal on Cancel
    modalBtnCancel.addEventListener('click', () => {
        confirmModal.classList.remove('active');
    });

    // Hide modal on click outside modal-box
    confirmModal.addEventListener('click', (e) => {
        if (e.target === confirmModal) {
            confirmModal.classList.remove('active');
        }
    });

    // Clear and hide on Confirm
    modalBtnConfirm.addEventListener('click', () => {
        // Reset and enable all toggles
        document.querySelectorAll('.section-toggle').forEach(toggle => {
            toggle.checked = true;
            const sectionId = toggle.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            const accordionItem = toggle.closest('.accordion-item');
            if (targetSection) targetSection.classList.remove('hidden-section');
            if (accordionItem) accordionItem.classList.remove('section-disabled');
        });

        resetSectionOrderToDefault();

        // Clear inputs
        const textInputs = [
            inputFullname, inputTitle, inputEmail, inputPhone, inputLink,
            inputLinkedin, inputWebsite, inputLocation, inputSummary
        ];
        textInputs.forEach(input => input.value = '');

        const currentLang = localStorage.getItem('procv_lang') || 'es';
        const t = translations[currentLang] || translations['es'];

        inputTitleProfile.value = t.def_profile;
        inputTitleExperience.value = t.def_experience;
        inputTitleProjects.value = t.def_projects;
        inputTitleEducation.value = t.def_education;
        inputTitleSkills.value = t.def_skills;
        inputTitleSoftSkills.value = t.def_softskills;
        inputSoftSkillsDesc.value = '';
        inputTitleLanguages.value = t.def_languages;

        // Clear Dynamic Lists
        experienceList.innerHTML = '';
        projectsList.innerHTML = '';
        educationList.innerHTML = '';
        if(skillsList) skillsList.innerHTML = '';
        if(languagesList) languagesList.innerHTML = '';

        currentPhoto = null;
        if(inputPhoto) inputPhoto.value = '';

        // Update Preview to blank fallback states
        updatePreview();
        
        // Hide modal
        confirmModal.classList.remove('active');
    });

    // ----------------------------------------------------
    // Import / Export JSON
    // ----------------------------------------------------
    if(btnExportJson) {
        btnExportJson.addEventListener('click', () => {
            saveToLocalStorage(); // Ensure latest changes are saved
            const savedStateString = localStorage.getItem('procv-state');
            if (!savedStateString) return;
            const blob = new Blob([savedStateString], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            let baseName = inputFullname.value.trim().replace(/\s+/g, '_');
            if (!baseName) baseName = 'Mi_Curriculum';
            a.download = `${baseName}_ProCV.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
    }

    if(btnImportJson && inputJsonFile) {
        btnImportJson.addEventListener('click', () => {
            inputJsonFile.click();
        });

        inputJsonFile.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const importedState = JSON.parse(e.target.result);
                    localStorage.setItem('procv-state', JSON.stringify(importedState));
                    loadFromLocalStorage();
                    alert('Currículum cargado correctamente.');
                } catch (err) {
                    alert('Error al leer el archivo JSON.');
                }
                inputJsonFile.value = '';
            };
            reader.readAsText(file);
        });
    }

    // ----------------------------------------------------
    // Export PDF (Browser Print Trigger)
    // ----------------------------------------------------
    btnExportPdf.addEventListener('click', () => {
        let baseName = inputFullname.value.trim().replace(/\s+/g, '_');
        if (!baseName) baseName = 'Curriculum';
        
        // Save the original document title
        const originalTitle = document.title;
        // Temporarily change title so the exported PDF gets this default name
        document.title = `${baseName}_ProCV`;
        
        // Trigger native print dialog
        window.print();
        
        // Restore the original document title
        document.title = originalTitle;
    });

    // ----------------------------------------------------
    // LocalStorage State Persistence
    // ----------------------------------------------------
    function saveToLocalStorage() {
        const cvData = {
            fullname: inputFullname.value,
            title: inputTitle.value,
            email: inputEmail.value,
            phone: inputPhone.value,
            location: inputLocation.value,
            website: inputWebsite.value,
            link: inputLink.value,
            linkedin: inputLinkedin.value,
            summary: inputSummary.value,
            skills: Array.from(skillsList.querySelectorAll('.dynamic-item')).map(item => ({
                name: item.querySelector('.skill-name').value,
                level: item.querySelector('.skill-level').value
            })),
            titles: {
                profile: inputTitleProfile.value,
                experience: inputTitleExperience.value,
                projects: inputTitleProjects.value,
                education: inputTitleEducation.value,
                skills: inputTitleSkills.value,
                softskills: inputTitleSoftSkills.value,
                languages: inputTitleLanguages.value
            },
            softskillsDesc: inputSoftSkillsDesc.value,
            photo: currentPhoto,
            experience: [],
            projects: [],
            education: [],
            languages: [],
            toggles: {}
        };

        // Extract Languages
        if (languagesList) {
            document.querySelectorAll('#languages-list .dynamic-item').forEach(item => {
                cvData.languages.push({
                    name: item.querySelector('.lang-name').value,
                    level: item.querySelector('.lang-level').value
                });
            });
        }

        // Collect Toggles State
        document.querySelectorAll('.section-toggle').forEach(toggle => {
            cvData.toggles[toggle.getAttribute('data-section')] = toggle.checked;
        });

        // Collect Experience Items
        experienceList.querySelectorAll('.dynamic-item').forEach(item => {
            cvData.experience.push({
                role: item.querySelector('.exp-role').value,
                company: item.querySelector('.exp-company').value,
                dates: item.querySelector('.exp-dates').value,
                desc: item.querySelector('.exp-desc').value
            });
        });

        // Collect Project Items
        projectsList.querySelectorAll('.dynamic-item').forEach(item => {
            cvData.projects.push({
                title: item.querySelector('.proj-title').value,
                tech: item.querySelector('.proj-tech').value,
                desc: item.querySelector('.proj-desc').value
            });
        });

        // Collect Education Items
        educationList.querySelectorAll('.dynamic-item').forEach(item => {
            cvData.education.push({
                degree: item.querySelector('.edu-degree').value,
                school: item.querySelector('.edu-school').value,
                dates: item.querySelector('.edu-dates').value
            });
        });

        // Note: we can't save theme and template inside cvData right now because import/export 
        // doesn't usually override layout, but let's save them to localStorage independently.
        localStorage.setItem('procv-state', JSON.stringify(cvData));
        
        // Save Section Order
        const orderedIds = Array.from(document.querySelectorAll('.section-toggle'))
            .map(toggle => toggle.getAttribute('data-section'))
            .filter(id => id);
        localStorage.setItem('procv-section-order', JSON.stringify(orderedIds));

        const activeThemeItem = document.querySelector('#theme-dropdown-menu .dropdown-item.active');
        if (activeThemeItem) {
            localStorage.setItem('procv-theme', activeThemeItem.getAttribute('data-theme'));
        }
        
        const activeTemplateItem = document.querySelector('#template-dropdown-menu .dropdown-item.active');
        if (activeTemplateItem) {
            localStorage.setItem('procv-template', activeTemplateItem.getAttribute('data-template'));
        }
    }

    function loadFromLocalStorage() {
        // Load Language
        const savedLang = localStorage.getItem('procv_lang') || 'es';
        const langDropdownContainer = document.getElementById('lang-dropdown-container');
        if (langDropdownContainer) {
            const langItems = document.querySelectorAll('#lang-dropdown-menu .dropdown-item');
            const langSelectedText = document.getElementById('lang-selected-text');
            langItems.forEach(i => {
                if (i.getAttribute('data-lang') === savedLang) {
                    i.classList.add('active');
                    langSelectedText.textContent = i.textContent;
                } else {
                    i.classList.remove('active');
                }
            });
            updateLanguage(savedLang);
        }

        // Load Theme
        const savedTheme = localStorage.getItem('procv-theme') || 'sapphire';
        const savedTemplate = localStorage.getItem('procv-template') || 'modern';
        
        document.body.className = '';
        document.body.classList.add(`theme-${savedTheme}`);
        document.body.classList.add(`template-${savedTemplate}`);
        
        // Mark correct theme selector active
        const themeDropdownMenu = document.getElementById('theme-dropdown-menu');
        const themeSelectedIcon = document.getElementById('theme-selected-icon');
        if (themeDropdownMenu && themeSelectedIcon) {
            const themeItems = themeDropdownMenu.querySelectorAll('.dropdown-item');
            themeItems.forEach(i => {
                if (i.getAttribute('data-theme') === savedTheme) {
                    i.classList.add('active');
                    themeSelectedIcon.className = `theme-btn btn-${savedTheme} active`;
                } else {
                    i.classList.remove('active');
                }
            });
        }

        // Mark correct template selector active
        const templateDropdownMenu = document.getElementById('template-dropdown-menu');
        const templateSelectedText = document.getElementById('template-selected-text');
        if (templateDropdownMenu && templateSelectedText) {
            const templateItems = templateDropdownMenu.querySelectorAll('.dropdown-item');
            templateItems.forEach(i => {
                if (i.getAttribute('data-template') === savedTemplate) {
                    i.classList.add('active');
                    const iconElement = i.querySelector('i');
                    if (iconElement) {
                        templateSelectedText.innerHTML = iconElement.outerHTML;
                        if (window.lucide) {
                            lucide.createIcons({
                                nameAttr: 'data-lucide',
                                root: templateSelectedText
                            });
                        }
                    }
                } else {
                    i.classList.remove('active');
                }
            });
        }

        // Restore Section Order
        const savedOrderStr = localStorage.getItem('procv-section-order');
        if (savedOrderStr) {
            try {
                const savedOrder = JSON.parse(savedOrderStr);
                const container = document.querySelector('.sidebar-content');
                // We find the parent of the accordions. The accordions are inside .sidebar-content
                // Let's reorder them
                savedOrder.forEach(sectionId => {
                    const toggle = document.querySelector(`.section-toggle[data-section="${sectionId}"]`);
                    if (toggle) {
                        const item = toggle.closest('.accordion-item');
                        if (item && item.parentNode) {
                            item.parentNode.appendChild(item); // Move to the end
                        }
                    }
                });
                updatePreviewSectionOrder();
            } catch (e) {
                // Ignore corrupted local storage section order
            }
        }

        // Load State
        const savedStateString = localStorage.getItem('procv-state');
        if (!savedStateString) {
            // Load Sample Data on first visit to impress the user immediately!
            btnSampleData.click();
            return;
        }

        try {
            const state = JSON.parse(savedStateString);
            if (!state) {
                btnSampleData.click();
                return;
            }
            
            // Check if state is essentially empty
            const isEmpty = !state.fullname && 
                            (!state.experience || state.experience.length === 0) &&
                            (!state.education || state.education.length === 0);
            if (isEmpty) {
                btnSampleData.click();
                return;
            }
            
            // Populate text inputs
            inputFullname.value = state.fullname || '';
            inputTitle.value = state.title || '';
            inputEmail.value = state.email || '';
            inputPhone.value = state.phone || '';
            inputLocation.value = state.location || '';
            inputWebsite.value = state.website || '';
            inputLink.value = state.link || state.github || '';
            inputLinkedin.value = state.linkedin || '';
            inputSummary.value = state.summary || '';

            const currentLang = localStorage.getItem('procv_lang') || 'es';
            const t = translations[currentLang] || translations['es'];

            if (state.titles) {
                inputTitleProfile.value = state.titles.profile || t.def_profile;
                inputTitleExperience.value = state.titles.experience || t.def_experience;
                inputTitleProjects.value = state.titles.projects || t.def_projects;
                inputTitleEducation.value = state.titles.education || t.def_education;
                inputTitleSkills.value = state.titles.skills || t.def_skills;
                inputTitleSoftSkills.value = state.titles.softskills || t.def_softskills;
                inputTitleLanguages.value = state.titles.languages || t.def_languages;
            } else {
                inputTitleProfile.value = t.def_profile;
                inputTitleExperience.value = t.def_experience;
                inputTitleProjects.value = t.def_projects;
                inputTitleEducation.value = t.def_education;
                inputTitleSkills.value = t.def_skills;
                inputTitleSoftSkills.value = t.def_softskills;
                inputSoftSkillsDesc.value = '';
                inputTitleLanguages.value = t.def_languages;
            }
            inputSoftSkillsDesc.value = state.softskillsDesc || '';
            currentPhoto = state.photo || null;

            // Clear Dynamic Lists before loadingers
            experienceList.innerHTML = '';
            projectsList.innerHTML = '';
            educationList.innerHTML = '';
            if(skillsList) skillsList.innerHTML = '';
            if(languagesList) languagesList.innerHTML = '';

            if(state.skills) {
                if(skillsList) skillsList.innerHTML = '';
                state.skills.forEach(sk => addSkillField(sk.name, sk.level));
            }
            
            if (Array.isArray(state.languages)) {
                if(languagesList) languagesList.innerHTML = '';
                state.languages.forEach(lg => addLanguageField(lg.name, lg.level));
            }

            // Rebuild Experience lists
            if (Array.isArray(state.experience)) {
                state.experience.forEach(exp => addExperienceField(exp));
            }
            // Rebuild Project lists
            if (Array.isArray(state.projects)) {
                state.projects.forEach(proj => addProjectField(proj));
            }
            // Rebuild Education lists
            if (Array.isArray(state.education)) {
                state.education.forEach(edu => addEducationField(edu));
            }

            // Restore toggles state
            if (state.toggles) {
                document.querySelectorAll('.section-toggle').forEach(toggle => {
                    const sectionId = toggle.getAttribute('data-section');
                    if (state.toggles[sectionId] !== undefined) {
                        toggle.checked = state.toggles[sectionId];
                        const targetSection = document.getElementById(sectionId);
                        const accordionItem = toggle.closest('.accordion-item');
                        if (targetSection && accordionItem) {
                            if (toggle.checked) {
                                targetSection.classList.remove('hidden-section');
                                accordionItem.classList.remove('section-disabled');
                            } else {
                                targetSection.classList.add('hidden-section');
                                accordionItem.classList.add('section-disabled');
                            }
                        }
                    }
                });
            }

            updatePreview();
        } catch (e) {
            // Default behavior handles empty fields fine.
            btnSampleData.click();
        }
    }

    // ----------------------------------------------------
    // Section Visibility Toggles
    // ----------------------------------------------------
    const sectionToggles = document.querySelectorAll('.section-toggle');
    
    sectionToggles.forEach(toggle => {
        // Prevent accordion from toggling when clicking the checkbox
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Toggle section in preview
        toggle.addEventListener('change', () => {
            const sectionId = toggle.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            const accordionItem = toggle.closest('.accordion-item');

            if (targetSection && accordionItem) {
                if (toggle.checked) {
                    targetSection.classList.remove('hidden-section');
                    accordionItem.classList.remove('section-disabled');
                } else {
                    targetSection.classList.add('hidden-section');
                    accordionItem.classList.add('section-disabled');
                }
            }
            saveToLocalStorage();
        });
    });

    // ----------------------------------------------------
    // Auto-bullet functionality
    // ----------------------------------------------------
    document.addEventListener('keydown', function(e) {
        if (e.target && e.target.classList.contains('bullet-textarea')) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const start = e.target.selectionStart;
                const end = e.target.selectionEnd;
                const val = e.target.value;
                const bullet = '\n• ';
                e.target.value = val.substring(0, start) + bullet + val.substring(end);
                e.target.selectionStart = e.target.selectionEnd = start + bullet.length;
                e.target.dispatchEvent(new Event('input', { bubbles: true }));
            }
        }
    });

    document.addEventListener('input', function(e) {
        if (e.target && e.target.classList.contains('bullet-textarea')) {
            let val = e.target.value;
            if (val.length > 0 && !val.startsWith('• ')) {
                if (val.startsWith('•')) {
                    e.target.value = '• ' + val.substring(1).trimStart();
                } else {
                    e.target.value = '• ' + val;
                }
            }
            // Also ensure that if the user deletes everything except the bullet, and then deletes the bullet, it allows it to be empty.
            if (val === '•' || val === '• ') {
                // If they are trying to delete the bullet, let it become empty
                // Wait, if it's strictly '• ' and they backspace, it becomes '•' which then triggers nothing or we can clear it.
                if (e.inputType === 'deleteContentBackward') {
                    e.target.value = '';
                }
            }
        }
    });

    document.addEventListener('focusin', function(e) {
        if (e.target && e.target.classList.contains('bullet-textarea')) {
            if (e.target.value.trim() === '') {
                e.target.value = '• ';
                e.target.selectionStart = e.target.selectionEnd = e.target.value.length;
                e.target.dispatchEvent(new Event('input', { bubbles: true }));
            }
        }
    });

    // ----------------------------------------------------
    // Initialization
    // ----------------------------------------------------
    loadFromLocalStorage();
    safeCreateIcons();
});

// ----------------------------------------------------
// Legal Modals
// ----------------------------------------------------
window.openLegalModal = function(modalId) {
    document.getElementById(modalId).classList.add('active');
    // Refresh lucide icons for modal close buttons if needed
    if (typeof lucide !== 'undefined') lucide.createIcons();
};
window.closeLegalModal = function(modalId) {
    document.getElementById(modalId).classList.remove('active');
};
