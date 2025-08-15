// Script para manejar las zonas del archivo Excel
class ZonasManager {
    constructor() {
        this.zonas = [];
        this.archivoExcel = 'Zonas_Fco_Morazan.xlsx';
        this.init();
    }

    init() {
        // Cargar zonas por defecto inmediatamente
        this.zonas = this.obtenerZonasPorDefecto();
        this.configurarInterfaz();
        
        // Intentar cargar el archivo Excel si está disponible
        this.intentarCargarExcel();
    }

    async intentarCargarExcel() {
        try {
            // Intentar cargar el archivo Excel desde la misma carpeta
            const response = await fetch(this.archivoExcel);
            if (response.ok) {
                const arrayBuffer = await response.arrayBuffer();
                this.procesarArchivoExcel(arrayBuffer);
            } else {
                console.log('Archivo Excel no encontrado, usando zonas por defecto');
            }
        } catch (error) {
            console.log('No se pudo cargar el archivo Excel:', error);
            // Continuar con las zonas por defecto
        }
    }

    procesarArchivoExcel(arrayBuffer) {
        try {
            // Aquí se procesaría el archivo Excel real
            // Por ahora, usaremos las zonas por defecto
            console.log('Archivo Excel cargado, pero usando zonas por defecto por simplicidad');
            this.actualizarSelectZonas();
        } catch (error) {
            console.error('Error al procesar el archivo Excel:', error);
        }
    }

    obtenerZonasPorDefecto() {
        // Datos de ejemplo basados en zonas comunes de Francisco Morazán
        return [
            'Colonia Centro',
            'Colonia Kennedy',
            'Colonia Las Brisas',
            'Colonia Los Pinos',
            'Colonia Palmira',
            'Colonia San Miguel',
            'Colonia Villa Adela',
            'Colonia Villa Olímpica',
            'Colonia Alameda',
            'Colonia Bella Vista',
            'Colonia Cerro Grande',
            'Colonia El Carrizal',
            'Colonia El Hatillo',
            'Colonia El Pedregal',
            'Colonia Florencia',
            'Colonia La Granja',
            'Colonia La Hacienda',
            'Colonia La Laguna',
            'Colonia La Leona',
            'Colonia La Reforma',
            'Colonia Lomas del Guijarro',
            'Colonia Los Laureles',
            'Colonia Miraflores',
            'Colonia Nueva Suyapa',
            'Colonia San Francisco',
            'Colonia San Juan',
            'Colonia Santa Rosa',
            'Colonia Suyapa',
            'Colonia Tegucigalpa',
            'Colonia Villa Nueva',
            'Colonia Villa San Antonio',
            'Colonia Villanueva',
            'Colonia Zacate Grande',
            'Barrio Abajo',
            'Barrio El Centro',
            'Barrio La Bolsa',
            'Barrio La Hoya',
            'Barrio La Isla',
            'Barrio La Leona',
            'Barrio La Ronda',
            'Barrio Los Dolores',
            'Barrio San Sebastián',
            'Barrio Santa Ana',
            'Barrio Santa Rosa',
            'Residencial Los Andes',
            'Residencial Los Castaños',
            'Residencial Los Cedros',
            'Residencial Los Pinos',
            'Residencial Los Robles',
            'Residencial Monte Carlo',
            'Residencial Monte Fresco',
            'Residencial Monte Verde',
            'Residencial San Carlos',
            'Residencial San José',
            'Residencial San Miguel',
            'Residencial Santa María',
            'Residencial Valle del Sol',
            'Residencial Villa del Sol',
            'Residencial Villa Hermosa',
            'Residencial Villa Real',
            'Residencial Villa San Antonio',
            'Residencial Villa Santa',
            'Residencial Villa Verde',
            'Residencial Villanueva',
            'Residencial Zacate Grande'
        ];
    }

    configurarInterfaz() {
        // Buscar el campo de dirección en el formulario
        const campoDireccion = document.querySelector('input[name="direccion"]');
        if (campoDireccion) {
            this.crearInterfazDireccion(campoDireccion);
        }
    }

    crearInterfazDireccion(campoOriginal) {
        // Crear contenedor para la nueva interfaz
        const contenedor = document.createElement('div');
        contenedor.className = 'direccion-container';
        contenedor.style.marginBottom = '1rem';

        // Crear contenedor para la lista de zonas
        const listaZonas = document.createElement('div');
        listaZonas.id = 'lista-zonas';
        listaZonas.className = 'lista-zonas';
        listaZonas.style.display = 'none';

        // Crear botón para mostrar/ocultar lista
        const btnMostrarZonas = document.createElement('button');
        btnMostrarZonas.type = 'button';
        btnMostrarZonas.id = 'btn-mostrar-zonas';
        btnMostrarZonas.className = 'btn-mostrar-zonas';
        btnMostrarZonas.textContent = '📍 Seleccionar zona de la lista';
        btnMostrarZonas.style.width = '100%';

        // Crear campo de texto para dirección manual
        const campoManual = document.createElement('input');
        campoManual.type = 'text';
        campoManual.id = 'direccion-manual';
        campoManual.name = 'direccion';
        campoManual.placeholder = 'Escriba la dirección completa...';
        campoManual.style.display = 'none';
        campoManual.style.width = '100%';

        // Crear botón para entrada manual
        const btnManual = document.createElement('button');
        btnManual.type = 'button';
        btnManual.id = 'btn-manual';
        btnManual.className = 'btn-manual';
        btnManual.textContent = '✏️ Escribir dirección manualmente';
        btnManual.style.width = '100%';
        btnManual.style.display = 'none';

        // Eventos para los botones
        btnMostrarZonas.addEventListener('click', () => {
            if (listaZonas.style.display === 'none') {
                listaZonas.style.display = 'block';
                btnMostrarZonas.textContent = '📍 Ocultar lista de zonas';
                btnMostrarZonas.style.background = 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)';
                
                // Mostrar el botón manual cuando se abre la lista
                btnManual.style.display = 'block';
                
                // Restaurar el texto del botón si hay una zona seleccionada
                const zonaSeleccionada = campoOriginal.value;
                if (zonaSeleccionada && zonaSeleccionada.trim() !== '') {
                    btnMostrarZonas.textContent = '✅ Zona seleccionada: ' + zonaSeleccionada;
                    btnMostrarZonas.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                    btnMostrarZonas.style.borderColor = '#10b981';
                    
                    // Marcar visualmente la zona seleccionada en la lista
                    const botonSeleccionado = contenedor.querySelector(`[data-zona="${zonaSeleccionada}"]`);
                    if (botonSeleccionado) {
                        botonSeleccionado.classList.add('seleccionada');
                    }
                }
            } else {
                listaZonas.style.display = 'none';
                
                // Mantener el texto de zona seleccionada si hay una
                const zonaSeleccionada = campoOriginal.value;
                if (zonaSeleccionada && zonaSeleccionada.trim() !== '') {
                    btnMostrarZonas.textContent = '✅ Zona seleccionada: ' + zonaSeleccionada;
                    btnMostrarZonas.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                    btnMostrarZonas.style.borderColor = '#10b981';
                } else {
                    btnMostrarZonas.textContent = '📍 Seleccionar zona de la lista';
                    btnMostrarZonas.style.background = 'linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)';
                    btnMostrarZonas.style.borderColor = '#0ea5e9';
                }
                
                // Ocultar el botón manual cuando se cierra la lista
                btnManual.style.display = 'none';
            }
        });

        btnManual.addEventListener('click', () => {
            campoManual.style.display = 'block';
            campoManual.required = true;
            listaZonas.style.display = 'none';
            btnMostrarZonas.textContent = '📍 Seleccionar zona de la lista';
            btnMostrarZonas.style.background = 'linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)';
            btnMostrarZonas.style.borderColor = '#0ea5e9';
            
            // Ocultar el botón manual después de activarlo
            btnManual.style.display = 'none';
            
            // Enfocar el campo manual
            setTimeout(() => {
                campoManual.focus();
            }, 100);
        });

        campoManual.addEventListener('input', (e) => {
            campoOriginal.value = e.target.value;
            // Disparar evento de cambio para notificar al formulario
            const event = new Event('input', { bubbles: true });
            campoOriginal.dispatchEvent(event);
        });

        // Crear la lista de zonas
        this.crearListaZonas(listaZonas, campoOriginal);

        // Reemplazar el campo original
        const label = campoOriginal.closest('label');
        if (label) {
            label.appendChild(contenedor);
            contenedor.appendChild(btnMostrarZonas);
            contenedor.appendChild(listaZonas);
            contenedor.appendChild(btnManual);
            contenedor.appendChild(campoManual);
            // No ocultar el campo original, solo hacerlo invisible pero mantenerlo funcional
            campoOriginal.style.position = 'absolute';
            campoOriginal.style.left = '-9999px';
            campoOriginal.style.opacity = '0';
        }
    }

    crearListaZonas(contenedor, campoOriginal) {
        // Agrupar zonas por categorías
        const categorias = {
            '🏘️ Colonias': this.zonas.filter(z => z.startsWith('Colonia')),
            '🏠 Barrios': this.zonas.filter(z => z.startsWith('Barrio')),
            '🏡 Residenciales': this.zonas.filter(z => z.startsWith('Residencial'))
        };

        Object.entries(categorias).forEach(([categoria, zonas]) => {
            if (zonas.length > 0) {
                // Crear título de categoría
                const tituloCategoria = document.createElement('div');
                tituloCategoria.className = 'categoria-titulo';
                tituloCategoria.textContent = categoria;
                contenedor.appendChild(tituloCategoria);

                // Crear botones para cada zona
                zonas.forEach(zona => {
                    const btnZona = document.createElement('button');
                    btnZona.type = 'button';
                    btnZona.className = 'btn-zona';
                    btnZona.textContent = zona;
                    btnZona.setAttribute('data-zona', zona);

                    btnZona.addEventListener('mouseenter', () => {
                        if (!btnZona.classList.contains('seleccionada')) {
                            btnZona.style.background = 'linear-gradient(90deg, rgba(14, 165, 233, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)';
                            btnZona.style.color = '#0ea5e9';
                            btnZona.style.transform = 'translateX(5px)';
                            btnZona.style.paddingLeft = '1.5rem';
                        }
                    });

                    btnZona.addEventListener('mouseleave', () => {
                        if (!btnZona.classList.contains('seleccionada')) {
                            btnZona.style.background = 'transparent';
                            btnZona.style.color = '#374151';
                            btnZona.style.transform = 'translateX(0)';
                            btnZona.style.paddingLeft = '1.2rem';
                        }
                    });

                    btnZona.addEventListener('click', () => {
                        // Remover selección anterior
                        const botonesSeleccionados = contenedor.querySelectorAll('.btn-zona.seleccionada');
                        botonesSeleccionados.forEach(btn => {
                            btn.classList.remove('seleccionada');
                            btn.style.background = 'transparent';
                            btn.style.color = '#374151';
                            btn.style.fontWeight = 'normal';
                            btn.style.transform = 'translateX(0)';
                            btn.style.boxShadow = 'none';
                            btn.style.paddingLeft = '1.2rem';
                        });

                        // Marcar como seleccionada
                        btnZona.classList.add('seleccionada');
                        btnZona.style.background = 'linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)';
                        btnZona.style.color = '#fff';
                        btnZona.style.fontWeight = 'bold';
                        btnZona.style.transform = 'translateX(8px)';
                        btnZona.style.boxShadow = '0 2px 10px rgba(14, 165, 233, 0.3)';
                        btnZona.style.paddingLeft = '1.5rem';

                        campoOriginal.value = zona;
                        
                        // Ocultar la lista después de seleccionar
                        const listaZonas = document.getElementById('lista-zonas');
                        const btnMostrarZonas = document.getElementById('btn-mostrar-zonas');
                        const btnManual = document.getElementById('btn-manual');
                        const campoManual = document.getElementById('direccion-manual');
                        
                        if (listaZonas) {
                            listaZonas.style.display = 'none';
                            btnMostrarZonas.textContent = '✅ Zona seleccionada: ' + zona;
                            btnMostrarZonas.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                            btnMostrarZonas.style.borderColor = '#10b981';
                            btnMostrarZonas.style.color = '#fff';
                            btnMostrarZonas.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.3)';
                        }
                        
                        // Ocultar el botón de entrada manual y el campo manual
                        if (btnManual) {
                            btnManual.style.display = 'none';
                        }
                        if (campoManual) {
                            campoManual.style.display = 'none';
                            campoManual.required = false;
                            campoManual.value = '';
                        }
                        
                        // Disparar evento de cambio para notificar al formulario
                        const event = new Event('input', { bubbles: true });
                        campoOriginal.dispatchEvent(event);
                    });

                    contenedor.appendChild(btnZona);
                });
            }
        });
    }

    actualizarSelectZonas() {
        const selectZonas = document.getElementById('select-zonas');
        if (selectZonas) {
            // Mantener las opciones existentes (por defecto y manual)
            const opcionesExistentes = Array.from(selectZonas.children).slice(0, 2);
            selectZonas.innerHTML = '';
            
            // Restaurar opciones existentes
            opcionesExistentes.forEach(opcion => {
                selectZonas.appendChild(opcion);
            });

            // Agregar las zonas
            this.zonas.forEach(zona => {
                const opcion = document.createElement('option');
                opcion.value = zona;
                opcion.textContent = zona;
                selectZonas.appendChild(opcion);
            });
        }
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    new ZonasManager();
}); 