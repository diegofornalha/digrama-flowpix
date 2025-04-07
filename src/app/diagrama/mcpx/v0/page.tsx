"use client";

import React from 'react';
import Link from 'next/link';

// Adicionar declaração de JSX para elementos customizados
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

const MCPXDiagramV0Page = () => {
  return (
    <div className="container">
      <Link href="/" className="back-link">← Voltar</Link>
      
      <div className="panzoom">
        <div className="diagram">
          <div id="usuario" className="item actor">Usuário</div>
          <div id="agenteIA" className="item actor">Agente IA</div>
          <div id="mcp" className="item system">Model Context Protocol</div>
          <div id="mcpxCrew" className="item highlight">@MCPX CrewAI Prompt</div>
          <div id="respostaProc" className="item highlight">Resposta Processada</div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        html, body {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
        
        .container {
          background-color: black;
          color: #00BFFF;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          top: 0;
          overflow: hidden;
        }
        
        .back-link {
          position: absolute;
          top: 15px;
          left: 15px;
          z-index: 1000;
          color: #00BFFF;
          text-decoration: none;
          font-size: 14px;
        }
        
        .back-link:hover {
          text-decoration: underline;
        }
        
        .panzoom {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 255, 0.1);
          left: 0;
          top: 0;
          overflow: visible;
          border: 5px dotted rgba(204, 204, 204, 0.1);
          box-sizing: border-box;
        }
        
        .diagram {
          position: absolute;
        }
        
        .item {
          cursor: pointer;
          position: absolute;
          overflow: hidden;
          white-space: nowrap;
          border: 1px solid #003366;
          padding: 8px;
          border-radius: 3px;
          background-color: rgba(0, 191, 255, 0.2);
          color: white;
          font-size: 14px;
          min-width: 120px;
          text-align: center;
          z-index: 20;
        }
        
        .item:hover {
          border: 1px solid #00BFFF;
          background-color: rgba(0, 191, 255, 0.3);
          z-index: 30;
        }
        
        .jsplumb-connector path {
          stroke: #00BFFF;
          stroke-width: 1.5px;
          z-index: 10;
        }
        
        .jsplumb-endpoint {
          z-index: 20;
        }
        
        .item.actor {
          background-color: rgba(64, 196, 255, 0.2);
          border-color: #0078d7;
        }
        
        .item.system {
          background-color: rgba(128, 0, 128, 0.2);
          border-color: #800080;
        }
        
        .item.highlight {
          background-color: rgba(255, 213, 79, 0.2);
          border-color: #ffc107;
          font-weight: bold;
        }
      `}} />
    </div>
  );
};

export default MCPXDiagramV0Page; 