<?xml version="1.0" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="">
<xsl:template match="/">
<html>
    <body>
        <table border="1" cellspacing="0" align="center">
            <tr>
                <td>Titre</td>
                <td>Artiste</td>
            </tr>
            <xsl:for-each select="compilation/mp3">
                <tr>
                    <tdxsl:value-of select="titre"></td>
                    <tdxsl:value-of select="artiste"></td>
                </tr>
            </xsl:for-each>
        </tabel>
    </body>
</html>
</xsl:template>
</xsl:stylesheet>